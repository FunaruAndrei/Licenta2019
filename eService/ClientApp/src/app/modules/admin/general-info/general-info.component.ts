import { Component, OnInit, Inject } from '@angular/core';
import { AuthService, User } from 'src/app/core/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { GeneralInfoService } from './general-info.service';
import { LoaderService } from 'src/app/core/loader/loader.service';
import { HttpEventType } from '@angular/common/http';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ServiceInfo } from 'src/app/core/models/service-info';

interface DialogData {
  filename: string;
  service: string;
}

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss'],
  host: {
    class: 'app-general-info'
  }
})
export class GeneralInfoComponent implements OnInit {

  user: User;
  genInfoId: number;
  info: ServiceInfo;
  public progress: number;
  public message: string;

  genInfoForm: FormGroup;
  imageSrc: any;

  emailFormControl = new FormControl('', [
    Validators.email,
  ]);

  constructor(
    private iziToast: Ng2IzitoastService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private generalInfoService: GeneralInfoService,
    private loaderService: LoaderService,
    public dialog: MatDialog,
    private fb: FormBuilder) {



  }

  ngOnInit() {
    this.info = new ServiceInfo();
    this.info.logo = "/images/Placeholder/Service-logo.jpg";
    this.CreateFormControl();

    this.authService.GetUser().subscribe(e => {
      this.user = e

      this.genInfoId = parseInt(this.route.snapshot.paramMap.get('id'));

      if (this.genInfoId != 0) 
        this.GetGeneralInfo(this.genInfoId);
    }

    );
  }

  CreateFormControl() {
    this.genInfoForm = this.fb.group(
      {
        name: [this.info.nume, Validators.required],
        descriere: [this.info.descriere],
        adresaSediuSocial: [this.info.adresaSediuSocial],
        numeDelegat: [this.info.numeDelegat],
        telefonDelegat: [this.info.telefonDelegat],
        email: [this.info.emailDelegat, Validators.email]
      }
    );
  }

  displayPhoto(fileInput) {

    if (this.genInfoId == 0) {
      this.iziToast.warning({
        message: "Poza incarcata cu success!",
        position: "bottomCenter"
      });
    }

      if (fileInput.length === 0)
        return;

      const formData = new FormData();

    for (let file of fileInput) {
      formData.append(file.name, file);
      var fileName = file.name;
    }
      

    this.loaderService.show();

    this.generalInfoService.UploadLogoImage(formData, this.genInfoId).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress)
        this.progress = Math.round(100 * event.loaded / event.total);
      else if (event.type === HttpEventType.Response) {
        this.loaderService.hide();
        if (event.body == true) {
        
          setTimeout(() => {
            this.iziToast.success({
              message: "Poza incarcata cu success!",
              position: "bottomCenter"
            });
            this.info.logo = `https://eservice.blob.core.windows.net/serviceslogothumbnails/${this.genInfoId}/${fileName}`;
          }, 2000);
          
        } else {
          this.iziToast.error({
            message: "A aparut o problema la incarcarea pozei, incercati din nou!",
            position: "bottomCenter"
          });
        }
       
      }
      });

    
  }
  
  GetGeneralInfo(id: number) {

    this.loaderService.show();

    this.generalInfoService.GetServiceInfoByUserId(this.user.id).subscribe(
      e => {
        this.loaderService.hide();
        this.info = e;
        if (!this.info.logo) {
          this.info.logo = "/images/Placeholder/Service-logo.jpg";
        } else {
          this.info.logo = `https://eservice.blob.core.windows.net/serviceslogothumbnails/${this.info.serviceInfoId}/${this.info.logo}`
        }
        this.CreateFormControl();
      }
    )


  }

  AddUpdateGeneralInfo() {

    if (this.genInfoId == 0) {

      if (this.genInfoForm.valid) {

        this.loaderService.show();

        let infoAdd: ServiceInfo = {
          nume: this.genInfoForm.value.name,
          descriere: this.genInfoForm.value.descriere,
          adresaSediuSocial: this.genInfoForm.value.adresaSediuSocial,
          numeDelegat: this.genInfoForm.value.numeDelegat,
          telefonDelegat: this.genInfoForm.value.telefonDelegat,
          emailDelegat: this.genInfoForm.value.email
        } as ServiceInfo;

        if (this.genInfoId == 0) {
          this.generalInfoService.AddServiceInfo(infoAdd).subscribe(
            e => {
              this.loaderService.hide();
            }
          );
        } else {
          infoAdd.serviceInfoId = this.genInfoId;
          this.generalInfoService.EditServiceInfo(infoAdd, this.genInfoId).subscribe(e => {
            this.loaderService.hide();
            if (e == true) {
              this.iziToast.success({
                message: "Informatii editate cu succes!",
                position: "bottomCenter"
              });
            } else {
              this.iziToast.error({
                message: "Informatiile editate nu au putut fi salvate, incercati din nou!",
                position: "bottomCenter"
              });
            }
          })
        }
      }
    }
    else {

    }
  }

  OpenLogoViewer() {

    const dialogRef = this.dialog.open(LogoViewerComponent, {

      data: { filename: this.info.logo, service: this.info.nume } as DialogData
    });

  }

}

@Component({
  selector: 'logo-viewer',
  templateUrl: 'logo-viewer.component.html',
})
export class LogoViewerComponent {

  logo: string;

  constructor(
    public dialogRef: MatDialogRef<LogoViewerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.logo = data.filename.replace("serviceslogothumbnails", "serviceslogo");
  }

  CloseDialog(): void {
    this.dialogRef.close();
  }

}
