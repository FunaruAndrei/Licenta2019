(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-admin-admin-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin/admin-layout/admin-layout.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin/admin-layout/admin-layout.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n  <mat-toolbar color=\"primary\" fxLayout=\"row\">\r\n    <mat-toolbar-row class=\"admin-toolbar\" fxLayout=\"row wrap\" fxFlex=\"66\" fxFlexOffset=\"15\">\r\n\r\n      <img class=\"img-fluid\" src=\"/images/Logo/Logo-transparent-white.png\" style=\"height: inherit\" alt=\"Logo\" />\r\n      <span class=\"example-spacer\"></span>\r\n      <button mat-button [matMenuTriggerFor]=\"menu\">\r\n        Service-ul meu\r\n      </button>\r\n      <mat-menu #menu=\"matMenu\">\r\n        <button mat-menu-item (click)=\"GoToGeneralInfo()\">\r\n          <i class=\"fas fa-info-circle\"></i>\r\n          Informatii generale\r\n        </button>\r\n        <button mat-menu-item *ngFor=\"let item of locations\" (click)=\"GoToLocation(item)\">\r\n          <i class=\"fas fa-warehouse\"></i> {{item.name}}\r\n        </button>\r\n          <button mat-menu-item [disabled]=\"!generalInfoCompleted\" (click)=\"AddNewLocation()\">\r\n            <i class=\"fas fa-plus\"></i> Adauga locatie noua\r\n          </button>\r\n      </mat-menu>\r\n      <a mat-button href=\"/Identity/Account/LogoutAdmin\">Sign out</a>\r\n    </mat-toolbar-row>\r\n  </mat-toolbar>\r\n\r\n\r\n  <div fxLayout=\"column\" fxFlexOffset=\"2\">\r\n       <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin/general-info/general-info.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin/general-info/general-info.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxFlex fxFlex=\"66\" fxFlexOffset=\"15\">\r\n  <mat-card class=\"p-0\">\r\n    <mat-card-header class=\"p-3\">\r\n      <mat-card-title>Informatii generale service</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content class=\"p-3\">\r\n      <form [formGroup]=\"genInfoForm\" (ngSubmit)=\"AddUpdateGeneralInfo()\" novalidate>\r\n        <div fxLayout=\"column\" fxLayoutGap=\"20px\">\r\n          <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n            <div fxFlex=\"25\" fxLayoutAlign=\"center center\" fxLayout=\"row\">\r\n              <div class=\"image-container\">\r\n                <img class=\"rounded-circle\" [src]=\"info.logo\" alt=\"Photo\" />\r\n                <div class=\"rounded-circle overlay-picture\"></div>\r\n                <button type=\"button\" mat-mini-fab [matMenuTriggerFor]=\"menu\" color=\"\">\r\n                  <i class=\"fas fa-plus\"></i>\r\n                </button>\r\n                <mat-menu #menu=\"matMenu\">\r\n                  <button mat-menu-item (click)=\"file.click()\">\r\n                    <i class=\"fas fa-plus\"></i> Adauga/Schimba logo\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"OpenLogoViewer()\">\r\n                    <i class=\"fas fa-image\"></i> Vizualizeaza logo\r\n                  </button>\r\n                </mat-menu>\r\n              </div>\r\n\r\n            </div>\r\n            <div fxFlex fxLayout=\"column\">\r\n              <div>\r\n                <mat-form-field class=\"w-100\">\r\n                  <input matInput #message maxlength=\"256\" [style.fontSize]=\"'20px'\" placeholder=\"Nume service\" formControlName=\"name\">\r\n                  <mat-error *ngIf=\"genInfoForm.controls['name'].invalid && (genInfoForm.controls['name'].dirty || genInfoForm.controls['name'].touched)\">\r\n                    <div *ngIf=\"genInfoForm.controls['name'].errors.required\">\r\n                      Numele service-ului este <strong>obligatoriu</strong>\r\n                    </div>\r\n                  </mat-error>\r\n                  <mat-hint align=\"end\">{{message.value.length}} / 256</mat-hint>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div fxFlex fxLayout=\"column\">\r\n            <div fxFlex>\r\n              <mat-form-field fxFlex>\r\n                <textarea rows=\"3\" matInput placeholder=\"Descriere\" formControlName=\"descriere\"></textarea>\r\n              </mat-form-field>\r\n            </div>\r\n            <mat-form-field fxFlex>\r\n              <input matInput placeholder=\"Adresa\" formControlName=\"adresaSediuSocial\">\r\n            </mat-form-field>\r\n            <div fxFlex fxLayout=\"row\" fxLayoutGap=\"10px\">\r\n              <mat-form-field fxFlex>\r\n                <input matInput placeholder=\"Nume persoana contact\" formControlName=\"numeDelegat\">\r\n              </mat-form-field>\r\n              <mat-form-field fxFlex>\r\n                <input matInput placeholder=\"Telefon persoana contact\" formControlName=\"telefonDelegat\">\r\n              </mat-form-field>\r\n              <mat-form-field fxFlex>\r\n                <input matInput placeholder=\"Email persoana contact\" formControlName=\"email\">\r\n                <mat-error *ngIf=\"genInfoForm.controls['email'].invalid && (genInfoForm.controls['email'].dirty || genInfoForm.controls['name'].touched)\">\r\n                  <div *ngIf=\"genInfoForm.controls['email'].errors.email\">\r\n                    Adresa email <strong>invalida</strong>\r\n                  </div>\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div fxFlex fxFlexAlign=\"end\">\r\n\r\n              <button mat-button color=\"primary\" type=\"submit\" cdkFocusInitial>\r\n                <mat-icon>save</mat-icon> Salveaza\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n<input type=\"file\" [style.visibility]=\"'hidden'\" #file capture=\"camera\" accept=\"image/*\" (change)=\"displayPhoto(file.files)\" />\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin/general-info/logo-viewer.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin/general-info/logo-viewer.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>\r\n  Logo {{data.service}}\r\n  <button class=\"float-right\" mat-mini-fab (click)=\"CloseDialog()\">\r\n    <i class=\"fas fa-times\"></i>\r\n  </button>\r\n</h1>\r\n<div mat-dialog-content>\r\n <img [src]=\"logo\" alt=\"LogoImage\"/>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin/location-contact/add-location-contact/add-location-contact.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin/location-contact/add-location-contact/add-location-contact.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title fxLayoutAlign=\"center center\">\n  Adauga contact\n</h1>\n<div mat-dialog-content class=\"example-container\" fxLayout=\"column\">\n  <div class=\"input-row\">\n    <mat-form-field fxFlex>\n      <mat-label>Alege tipul de contact</mat-label>\n      <mat-select [(value)]=\"data.contact.contactTypeId\">\n        <mat-option *ngFor=\"let opt of data.types\" [value]=\"opt.contactTypeId\">\n          <i [ngClass]=\"opt.icon\"></i> {{opt.name}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <div class=\"input-row\">\n    <mat-form-field fxFlex>\n      <input matInput placeholder=\"Valoare contact\" [(ngModel)]=\"data.contact.value\">\n    </mat-form-field>\n  </div>\n</div>\n<div mat-dialog-actions fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n  <button mat-button color=\"primary\" [mat-dialog-close]=\"data\" cdkFocusInitial>\n    <mat-icon>add</mat-icon> Adauga\n  </button>\n  <button mat-button color=\"warn\" (click)=\"onNoClick()\">\n    <mat-icon>close</mat-icon> Renunta\n  </button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin/location-contact/delete-location-contact/delete-location-contact.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin/location-contact/delete-location-contact/delete-location-contact.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title fxLayoutAlign=\"center center\">\n  Sterge contact\n</h1>\n<div mat-dialog-content >\n  <p class=\"text-center\">Esti sigur ca vrei sa stergi contactul <b>{{data.value}}</b>?</p>\n</div>\n<div mat-dialog-actions fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n  <button mat-button color=\"warn\" [mat-dialog-close]=\"data\" cdkFocusInitial>\n    <mat-icon>delete</mat-icon> Da\n  </button>\n  <button mat-button  color=\"primary\" (click)=\"onNoClick()\" >\n    <mat-icon>close</mat-icon> Nu\n  </button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin/location-contact/location-contact.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin/location-contact/location-contact.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <mat-card-title>Contact locatie</mat-card-title>\n  </mat-card-header>\n  <mat-card-content class=\"p-3\">\n    <div fxLayout=\"column\">\n      \n      <div fxLayout=\"row\">\n        <mat-form-field fxFlex>\n          <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n        </mat-form-field>\n        <div fxFlex=\"2 2 calc(10em + 10px)\"></div>\n        <div fxFlex fxLayoutAlign=\"end center\">\n          <button mat-button color=\"accent\" (click)=\"AddContact()\">\n            <mat-icon>add</mat-icon> Adauga\n          </button>\n        </div>\n      </div>\n\n      <div fxFlex fxLayout=\"column\" class=\"mat-elevation-z8\">\n        <table fxFlex mat-table [dataSource]=\"dataSource\" matSort>\n\n          <ng-container matColumnDef=\"icon\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Tip contact </mat-header-cell>\n            <mat-cell mat-cell *matCellDef=\"let element\"> <i [ngClass]=\"element.icon\" class=\"mr-2\"></i> {{element.type}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"value\">\n            <mat-header-cell mat-header-cell *matHeaderCellDef mat-sort-header> Valoare </mat-header-cell>\n            <mat-cell mat-cell *matCellDef=\"let element\"> {{element.value}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"actions\">\n            <mat-header-cell mat-header-cell *matHeaderCellDef></mat-header-cell>\n            <mat-cell mat-cell *matCellDef=\"let element\" fxLayoutAlign=\"end center\">\n              <button mat-button color=\"warn\" (click)=\"DeleteContact(element)\">\n                <mat-icon>delete</mat-icon> Sterge\n              </button>\n            </mat-cell>\n          </ng-container>\n\n          <mat-header-row mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n\n        </table>\n        <mat-paginator fxFlex [pageSizeOptions]=\"[5, 10, 20, 30]\" showFirstLastButtons></mat-paginator>\n      </div>\n    </div>\n  </mat-card-content>\n \n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin/location-facilities/location-facilities.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin/location-facilities/location-facilities.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-header>\r\n    <mat-card-title>Facilitati locatie</mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content class=\"p-3\">\r\n    <div fxLayout=\"column\">\r\n      \r\n      <div fxLayout=\"row\">\r\n        <mat-form-field fxFlex>\r\n          <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n        </mat-form-field>\r\n        <div fxFlex=\"2 2 calc(10em + 10px)\"></div>\r\n      </div>\r\n\r\n      <div fxFlex fxLayout=\"column\" class=\"mat-elevation-z8\">\r\n        <table fxFlex mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n          <ng-container matColumnDef=\"icon\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Icon </mat-header-cell>\r\n            <mat-cell mat-cell *matCellDef=\"let element\"> <i [ngClass]=\"element.icon\" class=\"mr-2\"></i> </mat-cell>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"name\">\r\n            <mat-header-cell mat-header-cell *matHeaderCellDef mat-sort-header> Denumire </mat-header-cell>\r\n            <mat-cell mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"id\">\r\n            <mat-header-cell mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n            <mat-cell mat-cell *matCellDef=\"let element\" fxLayoutAlign=\"end center\">\r\n              <button mat-button color=\"accent\" *ngIf=\"element.id == 0\" (click)=\"AddFacility(element)\">\r\n                <mat-icon>add</mat-icon> Adauga\r\n              </button>\r\n              <button mat-button color=\"warn\" *ngIf=\"element.id != 0\" (click)=\"DeleteFacility(element)\">\r\n                <mat-icon>delete</mat-icon> Sterge\r\n              </button>\r\n            </mat-cell>\r\n          </ng-container>\r\n\r\n          <mat-header-row mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n          <mat-row mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n\r\n\r\n        </table>\r\n        <mat-paginator fxFlex [pageSizeOptions]=\"[5, 10, 20, 30]\" showFirstLastButtons></mat-paginator>\r\n      </div>\r\n    </div>\r\n  </mat-card-content>\r\n  <mat-card-actions align=\"end\">\r\n    <button mat-button color=\"primary\">Salveaza</button>\r\n  </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin/location-images/image-viewer/image-viewer.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin/location-images/image-viewer/image-viewer.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>\r\n  Imagini service\r\n  <button class=\"float-right\" mat-mini-fab (click)=\"CloseDialog()\">\r\n    <i class=\"fas fa-times\"></i>\r\n  </button>\r\n</h1>\r\n<div mat-dialog-content class=\"image-viewer-container\" fxLayout=\"row\">\r\n  <div fxFlex=\"5\" fxLayoutAlign=\"center center\">\r\n    <span class=\"arrow-wrapper\" style=\"font-size: 20px;\" (click)=\"MoveLeft()\">\r\n      <i class=\"fas fa-angle-left fa-2x\"></i>\r\n    </span>\r\n  </div>\r\n  <div fxFlex=\"90\" fxLayoutAlign=\"center center\">\r\n    <img [src]=\"GetSrc(data.selected)\" alt=\"LogoImage\" />\r\n  </div>\r\n  <div fxFlex=\"5\" fxLayoutAlign=\"center center\">\r\n    <span class=\"arrow-wrapper\" style=\"font-size: 20px;\" (click)=\"MoveRight()\">\r\n      <i class=\"fas fa-angle-right fa-2x\"></i>\r\n    </span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin/location-images/location-images.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin/location-images/location-images.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <mat-card-title>Imagini service</mat-card-title>\n  </mat-card-header>\n  <mat-card-content class=\"p-3\" fxLayout=\"column\">\n    <div fxFlex>\n      <div fxLayout=\"row\">\n        <!--<mat-form-field fxFlex>\n          <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n        </mat-form-field>-->\n        <div fxFlex=\"2 2 calc(10em + 10px)\"></div>\n        <div fxFlex fxLayoutAlign=\"end center\">\n          <button mat-button color=\"accent\" (click)=\"file.click()\">\n            <mat-icon>add</mat-icon> Adauga\n          </button>\n        </div>\n      </div>\n    </div>\n   \n    <div fxFlex fxLayout=\"row wrap\" fxLayoutGap=\"20px;\">\n      <div class=\"img-flex\" fxFlex=\"calc(25% - 20px)\"  *ngFor=\"let photo of photos\" fxLayoutAlign=\"center start\">\n        <img [src]=\"GetSrc(photo)\"/>\n        <div class=\"overlay-picture\"></div>\n        <button type=\"button\" mat-mini-fab [matMenuTriggerFor]=\"menu\" color=\"\">\n          <i class=\"fas fa-plus\"></i>\n        </button>\n        <mat-menu #menu=\"matMenu\">\n          <button mat-menu-item (click)=\"DeleteImage(photo)\">\n            <i class=\"fas fa-trash\"></i> Sterge imagine\n          </button>\n          <button mat-menu-item (click)=\"OpenImage(photo)\">\n            <i class=\"fas fa-image\"></i> Vizualizeaza imagine\n          </button>\n          <!--<button mat-menu-item (click)=\"OpenImage(photo)\">\n            <i class=\"fas fa-arrow-down\"></i> Muta la dreapta\n          </button>\n          <button mat-menu-item (click)=\"OpenImage(photo)\">\n            <i class=\"fas fa-arrow-up\"></i> Muta la stanga\n          </button>-->\n        </mat-menu>\n      </div>\n    \n    </div>\n  </mat-card-content>\n \n</mat-card>\n<input type=\"file\" [style.visibility]=\"'hidden'\" multiple=\"true\" #file capture=\"camera\" accept=\"image/*\" (change)=\"displayPhoto(file.files)\" />\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin/location-info/loc-info-map/loc-info-map.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin/location-info/loc-info-map/loc-info-map.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title fxLayoutAlign=\"center center\">\n  Locatie service {{data.name}}\n</h1>\n<div mat-dialog-content>\n  <agm-map [latitude]=\"lat\" [longitude]=\"long\" [zoom]=\"zoom\" (mapClick)=\"mapClicked($event)\">\n    <agm-marker [latitude]=\"data.latitude\" [longitude]=\"data.longitude\"></agm-marker>\n  </agm-map>\n</div>\n<div class=\"pt-3\" mat-dialog-actions fxLayout=\"row\" fxLayoutAlign=\"center center\">\n  <button mat-button color=\"warn\" [mat-dialog-close]=\"data\" cdkFocusInitial>\n    <mat-icon>check</mat-icon> Salveaza\n  </button>\n  <button mat-button color=\"primary\" (click)=\"CloseDialog()\">\n    <mat-icon>close</mat-icon> Renunta\n  </button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin/location-info/location-info.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin/location-info/location-info.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-header>\r\n    <mat-card-title>Informatii generale locatie</mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content class=\"p-3\">\r\n    <div fxLayout=\"column\" fxLayoutGap=\"10px\">\r\n      <div fxFlex fxLayout=\"row\" fxLayoutGap=\"20px\">\r\n        <div fxFlex=\"50\">\r\n          <mat-form-field fxFlex>\r\n            <input matInput placeholder=\"Nume locatie\" [(ngModel)]=\"info.name\" (ngModelChange)=\"info.name = $event\">\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxFlex=\"50\">\r\n          <mat-form-field fxFlex>\r\n            <input matInput placeholder=\"Oras\" aria-label=\"Oras\" [(ngModel)]=\"info.city\" [matAutocomplete]=\"auto\" [formControl]=\"cityCtrl\">\r\n            <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\" (optionSelected)=\"CitySelected($event.option.value)\">\r\n              <mat-option *ngFor=\"let state of filteredCities | async\" [value]=\"state\">\r\n                <span>{{state.name}}</span> |\r\n                <small>Judet: {{state.judet}}</small> \r\n              </mat-option>\r\n            </mat-autocomplete>\r\n\r\n            <!--<input type=\"text\" placeholder=\"Oras\" aria-label=\"Oras\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\r\n            <mat-autocomplete #auto=\"matAutocomplete\">\r\n              <mat-option *ngFor=\"let oras of citiesShown\" [value]=\"info.city.name\">\r\n                {{oras.name}}\r\n              </mat-option>\r\n            </mat-autocomplete>-->\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div fxFlex>\r\n        <mat-form-field fxFlex>\r\n          <textarea rows=\"1\" matInput placeholder=\"Adresa\" [(ngModel)]=\"info.address\"></textarea>\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex fxLayout=\"row\" fxLayoutGap=\"20px\">\r\n        <mat-form-field fxFlex=\"33\">\r\n          <input matInput type=\"number\" placeholder=\"Numar maxim de masini\" [(ngModel)]=\"info.maxCars\">\r\n        </mat-form-field>\r\n        <div fxFlex fxLayout=\"row\" fxLayoutGap=\"20px\">\r\n          <div fxFlex=\"45\">\r\n            <mat-form-field fxFlex>\r\n              <input matInput type=\"number\" placeholder=\"Longitudine\" [(ngModel)]=\"info.longitude\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div fxFlex=\"45\">\r\n            <mat-form-field fxFlex>\r\n              <input matInput type=\"number\" placeholder=\"Latitudine\" [(ngModel)]=\"info.latitude\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div fxFlex>\r\n            <button mat-button\r\n                    (click)=\"SelectLocationCoords()\"\r\n                    matTooltip=\"Alege coordonatele pe mapa!\">\r\n              <i class=\"fas fa-map\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n   \r\n  </mat-card-content>\r\n  <mat-card-actions align=\"end\">\r\n    <button mat-button color=\"primary\" (click)=\"SaveData()\">Salveaza</button>\r\n  </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin/location-manufacturers/location-manufacturers.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin/location-manufacturers/location-manufacturers.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <mat-card-title>Branduri masini acceptate</mat-card-title>\n  </mat-card-header>\n  <mat-card-content class=\"p-3\">\n    <div fxLayout=\"column\">\n      \n      <div fxLayout=\"row\">\n        <mat-form-field fxFlex>\n          <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n        </mat-form-field>\n        <div fxFlex=\"2 2 calc(10em + 10px)\"></div>\n      </div>\n\n      <div fxFlex fxLayout=\"column\" class=\"mat-elevation-z8\">\n        <table fxFlex mat-table [dataSource]=\"dataSource\" matSort>\n\n          <ng-container matColumnDef=\"icon\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Icon </mat-header-cell>\n            <mat-cell mat-cell *matCellDef=\"let element\">\n               <img class=\"car-logo\" [src]=\"'/images/CarLogos/'+element.icon\"/>\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"name\">\n            <mat-header-cell mat-header-cell *matHeaderCellDef mat-sort-header> Denumire </mat-header-cell>\n            <mat-cell mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"id\">\n            <mat-header-cell mat-header-cell *matHeaderCellDef></mat-header-cell>\n            <mat-cell mat-cell *matCellDef=\"let element\" fxLayoutAlign=\"end center\">\n              <button mat-button color=\"accent\" *ngIf=\"element.id == 0\" (click)=\"AddManufacturer(element)\">\n                <mat-icon>add</mat-icon> Adauga\n              </button>\n              <button mat-button color=\"warn\" *ngIf=\"element.id != 0\" (click)=\"DeleteManufacturer(element)\">\n                <mat-icon>delete</mat-icon> Sterge\n              </button>\n            </mat-cell>\n          </ng-container>\n\n          <mat-header-row mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n\n        </table>\n        <mat-paginator fxFlex [pageSizeOptions]=\"[5, 10, 20, 30]\" showFirstLastButtons></mat-paginator>\n      </div>\n    </div>\n  </mat-card-content>\n  <mat-card-actions align=\"end\">\n    <button mat-button color=\"primary\">Salveaza</button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin/location-operations/add-location-operation/add-location-operation.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin/location-operations/add-location-operation/add-location-operation.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title fxLayoutAlign=\"center center\">\r\n  Adauga serviciu\r\n</h1>\r\n<div mat-dialog-content class=\"example-container\" fxLayout=\"column\">\r\n  <div class=\"input-row\">\r\n    <mat-form-field fxFlex>\r\n      <input matInput placeholder=\"Tip serviciu\" aria-label=\"Tip serviciu\" [matAutocomplete]=\"auto\" [(ngModel)]=\"selectedOpType\"\r\n             [formControl]=\"typeOpControl\"\r\n             [disabled]=\"data.type=='edit'\">\r\n      <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"OnTypeSelected($event.option.value)\" [displayWith] = \"displayFnType\">\r\n        <mat-option *ngFor=\"let type of filteredOptionsOpType | async\" [value]=\"type\">\r\n          <img class=\"mr-3\" aria-hidden [src]=\"'/images/Operations/' + type.icon\" height=\"25\">\r\n          <span>{{type.name}}</span>\r\n        </mat-option>\r\n      </mat-autocomplete>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div class=\"input-row\">\r\n    <mat-form-field fxFlex>\r\n      <input matInput placeholder=\"Serviciu\" aria-label=\"Serviciu\" [matAutocomplete]=\"autoa\" \r\n             [formControl]=\"opControl\"\r\n             [disabled]=\"data.type=='edit'\">\r\n      <mat-autocomplete #autoa=\"matAutocomplete\" (optionSelected)=\"OnOperationSelected($event.option.value)\" [displayWith] = \"displayFnType\">\r\n        <mat-option *ngFor=\"let op of filteredOptionsOp | async\" [value]=\"op\">\r\n          <span>{{op.name}}</span>\r\n        </mat-option>\r\n      </mat-autocomplete>\r\n    </mat-form-field>\r\n  </div>\r\n  <div class=\"input-row\">\r\n    <mat-form-field fxFlex>\r\n      <input matInput placeholder=\"Timp (minute)\" [(ngModel)]=\"data.item.time\">\r\n    </mat-form-field>\r\n  </div>\r\n  <div class=\"input-row\">\r\n    <mat-form-field fxFlex>\r\n      <input matInput placeholder=\"Pret (Lei)\" [(ngModel)]=\"data.item.price\">\r\n    </mat-form-field>\r\n  </div>\r\n</div>\r\n<div mat-dialog-actions fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n  <button mat-button color=\"primary\" [mat-dialog-close]=\"data\" cdkFocusInitial>\r\n    <mat-icon>check</mat-icon> Salveaza\r\n  </button>\r\n  <button mat-button color=\"warn\" (click)=\"onNoClick()\">\r\n    <mat-icon>close</mat-icon> Renunta\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin/location-operations/delete-location-operation/delete-location-operation.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin/location-operations/delete-location-operation/delete-location-operation.component.html ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title fxLayoutAlign=\"center center\">\r\n  Sterge serviciu\r\n</h1>\r\n<div mat-dialog-content fxLayoutAlign=\"center center\">\r\n  <p class=\"text-center\">Esti sigur ca vrei sa stergi serviciul  <b>{{data.op.name}}</b> <br/> <i>(Pret: {{data.item.price}} lei - Timp: {{data.item.time}} minute)</i>?</p>\r\n</div>\r\n<div mat-dialog-actions fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n  <button mat-button color=\"warn\" [mat-dialog-close]=\"data\" cdkFocusInitial>\r\n    <mat-icon>delete</mat-icon> Da\r\n  </button>\r\n  <button mat-button color=\"primary\" (click)=\"onNoClick()\">\r\n    <mat-icon>close</mat-icon> Nu\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin/location-operations/location-operations.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin/location-operations/location-operations.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-header>\r\n    <mat-card-title>Servicii oferite</mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content class=\"p-3\">\r\n    <div fxLayout=\"column\">\r\n      \r\n      <div fxLayout=\"row\">\r\n        <mat-form-field fxFlex>\r\n          <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n        </mat-form-field>\r\n        <div fxFlex=\"2 2 calc(10em + 10px)\"></div>\r\n        <div fxFlex fxLayoutAlign=\"end center\">\r\n          <button mat-button color=\"accent\" (click)=\"AddOperation()\">\r\n            <mat-icon>add</mat-icon> Adauga\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n      <div fxFlex fxLayout=\"column\" class=\"mat-elevation-z8\">\r\n        <table fxFlex mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n          <ng-container matColumnDef=\"typeOp\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Tip operatie</mat-header-cell>\r\n            <mat-cell mat-cell *matCellDef=\"let element\">\r\n              <img class=\"operation-image mr-3\" [src]=\"'/images/Operations/' + element.operation.serviceOperationType.icon\"/>\r\n              {{element.operation.serviceOperationType.name}}\r\n            </mat-cell>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"op\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Operatie</mat-header-cell>\r\n            <mat-cell mat-cell *matCellDef=\"let element\"> {{element.operation.name}}</mat-cell>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"time\">\r\n            <mat-header-cell mat-header-cell *matHeaderCellDef mat-sort-header> Timp </mat-header-cell>\r\n            <mat-cell mat-cell *matCellDef=\"let element\"> {{element.item.time}} </mat-cell>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"price\">\r\n            <mat-header-cell mat-header-cell *matHeaderCellDef mat-sort-header> Pret </mat-header-cell>\r\n            <mat-cell mat-cell *matCellDef=\"let element\"> {{element.item.price}} </mat-cell>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"actions\">\r\n            <mat-header-cell mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n            <mat-cell mat-cell *matCellDef=\"let element\" fxLayoutAlign=\"end center\">\r\n              <button mat-button color=\"accent\" (click)=\"EditOperation(element)\">\r\n                <mat-icon>edit</mat-icon> Editeaza\r\n              </button>\r\n              <button mat-button color=\"warn\" (click)=\"DeleteOperation(element)\">\r\n                <mat-icon>delete</mat-icon> Sterge\r\n              </button>\r\n            </mat-cell>\r\n          </ng-container>\r\n\r\n          <mat-header-row mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n          <mat-row mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n\r\n\r\n        </table>\r\n        <mat-paginator fxFlex [pageSizeOptions]=\"[5, 10, 20, 30]\" showFirstLastButtons></mat-paginator>\r\n      </div>\r\n    </div>\r\n  </mat-card-content>\r\n\r\n</mat-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin/location-program/location-program.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin/location-program/location-program.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <mat-card-title>Program locatie</mat-card-title>\n  </mat-card-header>\n  <mat-card-content class=\"p-3\">\n    <div fxLayout=\"column\">\n      \n      <div fxLayout=\"row\">\n        <mat-form-field fxFlex>\n          <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n        </mat-form-field>\n        <div fxFlex=\"2 2 calc(10em + 10px)\"></div>\n      </div>\n\n      <div fxFlex fxLayout=\"column\" class=\"mat-elevation-z8\">\n        <table fxFlex mat-table [dataSource]=\"dataSource\" matSort>\n\n          <ng-container matColumnDef=\"dayName\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Zi </mat-header-cell>\n            <mat-cell mat-cell *matCellDef=\"let element\"> {{element.dayName}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"open\">\n            <mat-header-cell mat-header-cell *matHeaderCellDef mat-sort-header> Deschidere </mat-header-cell>\n            <mat-cell mat-cell *matCellDef=\"let element\">\n              <mat-form-field *ngIf=\"element!=editItem\">\n                <input matInput [ngxTimepicker]=\"toggleTimepicker\" [format]=\"24\" [value]=\"element.open\" [disabled]=\"true\">\n                <ngx-material-timepicker-toggle matSuffix [for]=\"toggleTimepicker\"></ngx-material-timepicker-toggle>\n                <ngx-material-timepicker [enableKeyboardInput]=\"true\" #toggleTimepicker></ngx-material-timepicker>\n              </mat-form-field>\n              <mat-form-field *ngIf=\"element==editItem\">\n                <input id=\"editItemOpen\" matInput [ngxTimepicker]=\"toggleTimepicker\" [format]=\"24\" [(ngModel)]=\"editItem.open\" [value]=\"editItem.open\">\n                <ngx-material-timepicker-toggle matSuffix [for]=\"toggleTimepicker\"></ngx-material-timepicker-toggle>\n                <ngx-material-timepicker [enableKeyboardInput]=\"true\" #toggleTimepicker></ngx-material-timepicker>\n              </mat-form-field>\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"close\">\n            <mat-header-cell mat-header-cell *matHeaderCellDef mat-sort-header> Inchidere </mat-header-cell>\n            <mat-cell mat-cell *matCellDef=\"let element\">\n              <mat-form-field *ngIf=\"element!=editItem\">\n                <input matInput [ngxTimepicker]=\"toggleTimepickerEnd\" [format]=\"24\" [value]=\"element.close\" [disabled]=\"true\">\n                <ngx-material-timepicker-toggle matSuffix [for]=\"toggleTimepickerEnd\"></ngx-material-timepicker-toggle>\n                <ngx-material-timepicker [enableKeyboardInput]=\"true\" #toggleTimepickerEnd></ngx-material-timepicker>\n              </mat-form-field>\n              <mat-form-field *ngIf=\"element==editItem\">\n                <input matInput [ngxTimepicker]=\"toggleTimepickerEnd\" [format]=\"24\" [(ngModel)]=\"editItem.close\" [value]=\"editItem.close\">\n                <ngx-material-timepicker-toggle matSuffix [for]=\"toggleTimepickerEnd\"></ngx-material-timepicker-toggle>\n                <ngx-material-timepicker [enableKeyboardInput]=\"true\" #toggleTimepickerEnd></ngx-material-timepicker>\n              </mat-form-field>\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"actions\">\n            <mat-header-cell mat-header-cell *matHeaderCellDef></mat-header-cell>\n            <mat-cell mat-cell *matCellDef=\"let element\" fxLayoutAlign=\"end center\">\n            \n              <div *ngIf=\"element==editItem\">\n                <button mat-button color=\"accent\" (click)=\"ConfirmAddEdit(element)\">\n                  <mat-icon>check</mat-icon> Salveaza\n                </button>\n                <button mat-button color=\"warn\" (click)=\"CloseEdit(element)\">\n                  <mat-icon>close</mat-icon> Renunta\n                </button>\n              </div>\n              <div *ngIf=\"element!=editItem\">\n                <button mat-button color=\"accent\" *ngIf=\"element.locProgId == 0\" (click)=\"AddProgram(element)\">\n                  <mat-icon>add</mat-icon> Adauga\n                </button>\n                <button mat-button color=\"primary\" *ngIf=\"element.locProgId != 0\" (click)=\"EditProgram(element)\">\n                  <mat-icon>edit</mat-icon> Editeaza\n                </button>\n                <button mat-button color=\"warn\" *ngIf=\"element.locProgId != 0\" (click)=\"DeleteProgram(element)\">\n                  <mat-icon>delete</mat-icon> Sterge\n                </button>\n              </div>\n            </mat-cell>\n          </ng-container>\n\n          <mat-header-row mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n\n        </table>\n      </div>\n    </div>\n  </mat-card-content>\n  <mat-card-actions align=\"end\">\n    <button mat-button color=\"primary\">Salveaza</button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin/location-promotions/location-promotions.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin/location-promotions/location-promotions.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <mat-card-title>Promotii</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <div class=\"container-fluid\">\n      location-promotions works!\n    </div>\n  </mat-card-content>\n  <mat-card-actions align=\"end\">\n    <button mat-button color=\"primary\">Salveaza</button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin/serivce-location-layout/serivce-location-layout.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin/serivce-location-layout/serivce-location-layout.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxFlex fxLayout=\"row\">\r\n  <div fxFlex=\"66\" fxFlexOffset=\"15\" fxLayout=\"column\" fxLayoutGap=\"30px\" class=\"pl-1 pr-4 mb-5\">\r\n    <app-location-info id=\"location-info\" [cities]=\"cities\"></app-location-info>\r\n    <app-location-contact [ctypes]=\"contactTypes\" id=\"location-contact\"></app-location-contact>\r\n    <app-location-program id=\"location-program\"></app-location-program>\r\n    <app-location-facilities [facilities]=\"serviceFacilities\" id=\"location-facilities\"></app-location-facilities>\r\n    <app-location-manufacturers [brands]=\"carManufacturers\" id=\"location-manufacturers\"></app-location-manufacturers>\r\n    <app-location-operations [op]=\"serviceOperations\" [opTypes]=\"serviceOperationTypes\" id=\"location-operations\"></app-location-operations>\r\n    <app-location-images id=\"location-images\"></app-location-images>\r\n    <!--<app-location-promotions id=\"location-promotions\"></app-location-promotions>-->\r\n  </div>\r\n  <div>\r\n    <div class=\"toc-container\">\r\n      <mat-list>\r\n        <h3 mat-subheader>Sectiuni</h3>\r\n        <mat-list-item>\r\n          <div mat-line>\r\n            <a mat-button [ngx-scroll-to]=\"'location-info'\" [ngx-scroll-to-offset]=\"-100\">Informatii generale locatie</a>\r\n          </div>\r\n          <div mat-line>\r\n            <a mat-button [ngx-scroll-to]=\"'location-contact'\" [ngx-scroll-to-offset]=\"-100\">Contact locatie</a>\r\n          </div>\r\n          <div mat-line>\r\n            <a mat-button [ngx-scroll-to]=\"'location-program'\" [ngx-scroll-to-offset]=\"-100\">Program locatie</a>\r\n          </div>\r\n          <div mat-line>\r\n            <a mat-button [ngx-scroll-to]=\"'location-facilities'\" [ngx-scroll-to-offset]=\"-100\">Facilitati locatie</a>\r\n          </div>\r\n          <div mat-line>\r\n            <a mat-button [ngx-scroll-to]=\"'location-manufacturers'\" [ngx-scroll-to-offset]=\"-100\">Branduri masini acceptate</a>\r\n          </div>\r\n          <div mat-line>\r\n            <a mat-button [ngx-scroll-to]=\"'location-operations'\" [ngx-scroll-to-offset]=\"-100\">Servicii oferite</a>\r\n          </div>\r\n          <div mat-line>\r\n            <a mat-button [ngx-scroll-to]=\"'location-images'\" [ngx-scroll-to-offset]=\"-100\">Imagini service</a>\r\n          </div>\r\n          <div mat-line>\r\n            <a mat-button [ngx-scroll-to]=\"'location-promotions'\" [ngx-scroll-to-offset]=\"-100\">Promotii</a>\r\n          </div>\r\n        </mat-list-item>\r\n\r\n      </mat-list>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/core/models/service-info.ts":
/*!*********************************************!*\
  !*** ./src/app/core/models/service-info.ts ***!
  \*********************************************/
/*! exports provided: ServiceInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceInfo", function() { return ServiceInfo; });
var ServiceInfo = /** @class */ (function () {
    function ServiceInfo() {
    }
    return ServiceInfo;
}());



/***/ }),

/***/ "./src/app/core/models/service-location-contact.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/models/service-location-contact.ts ***!
  \*********************************************************/
/*! exports provided: ServiceLocationContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceLocationContact", function() { return ServiceLocationContact; });
var ServiceLocationContact = /** @class */ (function () {
    function ServiceLocationContact() {
    }
    return ServiceLocationContact;
}());



/***/ }),

/***/ "./src/app/core/models/service-location-operation.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/models/service-location-operation.ts ***!
  \***********************************************************/
/*! exports provided: ServiceLocationOperation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceLocationOperation", function() { return ServiceLocationOperation; });
var ServiceLocationOperation = /** @class */ (function () {
    function ServiceLocationOperation() {
    }
    return ServiceLocationOperation;
}());



/***/ }),

/***/ "./src/app/core/models/service-location.ts":
/*!*************************************************!*\
  !*** ./src/app/core/models/service-location.ts ***!
  \*************************************************/
/*! exports provided: ServiceLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceLocation", function() { return ServiceLocation; });
var ServiceLocation = /** @class */ (function () {
    function ServiceLocation() {
    }
    return ServiceLocation;
}());



/***/ }),

/***/ "./src/app/modules/admin/admin-layout/admin-layout.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/admin/admin-layout/admin-layout.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-spacer {\n  flex: 1 1 auto;\n}\n\na[mat-button] {\n  color: white;\n  text-decoration: none;\n}\n\n.admin-toolbar {\n  padding: 0;\n}\n\nmat-toolbar {\n  position: sticky;\n  position: -webkit-sticky;\n  /* For macOS/iOS Safari */\n  top: 0;\n  /* Sets the sticky toolbar to be on top */\n  z-index: 1000;\n  /* Ensure that your app's content doesn't overlap the toolbar */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9hZG1pbi1sYXlvdXQvQzpcXFVzZXJzXFxhbmRyZWkuZnVuYXJ1XFxEZXNrdG9wXFxMaWNlbnRhXFxlU2VydmljZVxcZVNlcnZpY2VcXENsaWVudEFwcC9zcmNcXGFwcFxcbW9kdWxlc1xcYWRtaW5cXGFkbWluLWxheW91dFxcYWRtaW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL2FkbWluLWxheW91dC9hZG1pbi1sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxjQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EscUJBQUE7QUNBRjs7QURHQTtFQUNFLFVBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7RUFBMEIseUJBQUE7RUFDMUIsTUFBQTtFQUFRLHlDQUFBO0VBQ1IsYUFBQTtFQUFlLCtEQUFBO0FDR2pCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbi9hZG1pbi1sYXlvdXQvYWRtaW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtc3BhY2VyXHJcbntcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuYVttYXQtYnV0dG9uXSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmFkbWluLXRvb2xiYXJ7XHJcbiAgcGFkZGluZzowO1xyXG59XHJcblxyXG5tYXQtdG9vbGJhciB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7IC8qIEZvciBtYWNPUy9pT1MgU2FmYXJpICovXHJcbiAgdG9wOiAwOyAvKiBTZXRzIHRoZSBzdGlja3kgdG9vbGJhciB0byBiZSBvbiB0b3AgKi9cclxuICB6LWluZGV4OiAxMDAwOyAvKiBFbnN1cmUgdGhhdCB5b3VyIGFwcCdzIGNvbnRlbnQgZG9lc24ndCBvdmVybGFwIHRoZSB0b29sYmFyICovXHJcbn1cclxuIiwiLmV4YW1wbGUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbmFbbWF0LWJ1dHRvbl0ge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmFkbWluLXRvb2xiYXIge1xuICBwYWRkaW5nOiAwO1xufVxuXG5tYXQtdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgLyogRm9yIG1hY09TL2lPUyBTYWZhcmkgKi9cbiAgdG9wOiAwO1xuICAvKiBTZXRzIHRoZSBzdGlja3kgdG9vbGJhciB0byBiZSBvbiB0b3AgKi9cbiAgei1pbmRleDogMTAwMDtcbiAgLyogRW5zdXJlIHRoYXQgeW91ciBhcHAncyBjb250ZW50IGRvZXNuJ3Qgb3ZlcmxhcCB0aGUgdG9vbGJhciAqL1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/admin/admin-layout/admin-layout.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/admin/admin-layout/admin-layout.component.ts ***!
  \**********************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_izitoast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-izitoast */ "./node_modules/ng2-izitoast/ng2-izitoast.es5.js");
/* harmony import */ var src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var src_app_core_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/loader/loader.service */ "./src/app/core/loader/loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/data.service */ "./src/app/modules/admin/shared/data.service.ts");







var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(iziToast, authService, loaderService, router, dataService) {
        this.iziToast = iziToast;
        this.authService = authService;
        this.loaderService = loaderService;
        this.router = router;
        this.dataService = dataService;
        this.generalInfoCompleted = false;
        this.locations = [];
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderService.show();
        this.authService.GetUser().subscribe(function (e) {
            _this.user = e;
            _this.GetServiceGeneral(e.id);
        });
    };
    AdminLayoutComponent.prototype.GetServiceGeneral = function (id) {
        var _this = this;
        this.dataService.GetServiceIdByUserId(id).subscribe(function (e) {
            _this.loaderService.hide();
            _this.generalInfoId = e;
            if (e == 0) {
                _this.iziToast.info({
                    message: "Informatii service necompletate, va rugam completati aceste informatii!",
                    position: "bottomCenter"
                });
                _this.router.navigate(['/admin', 'general', e]);
            }
            else {
                _this.GetLocationsList();
                _this.generalInfoCompleted = true;
                if (_this.router.url.indexOf("location") == -1) {
                    _this.router.navigate(['/admin', 'general', e]);
                }
            }
        });
    };
    AdminLayoutComponent.prototype.GetLocationsList = function () {
        var _this = this;
        this.dataService.GetLocationList(this.generalInfoId).subscribe(function (e) {
            _this.locations = e;
            if (_this.locations.length == 0) {
                _this.iziToast.info({
                    message: "Nu aveti nicio locatie adaugata, va rugam adaugati una pentru a aparea in cautarile clientilor!",
                    position: "bottomCenter"
                });
            }
        });
    };
    AdminLayoutComponent.prototype.GoToLocation = function (item) {
        //  this.router.navigateByUrl('/admin/location/' + this.generalInfoId + "/" + item.serviceLocationId);
        this.router.navigate(['/admin', 'location', this.generalInfoId, item.serviceLocationId]);
    };
    AdminLayoutComponent.prototype.AddNewLocation = function () {
        this.router.navigate(['/admin', 'location', this.generalInfoId, 0]);
    };
    AdminLayoutComponent.prototype.GoToGeneralInfo = function () {
        this.router.navigate(['/admin', 'general', this.generalInfoId]);
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
    };
    AdminLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-layout',
            template: __webpack_require__(/*! raw-loader!./admin-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin/admin-layout/admin-layout.component.html"),
            styles: [__webpack_require__(/*! ./admin-layout.component.scss */ "./src/app/modules/admin/admin-layout/admin-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng2_izitoast__WEBPACK_IMPORTED_MODULE_2__["Ng2IzitoastService"],
            src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            src_app_core_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _shared_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/admin-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/admin/admin-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-layout/admin-layout.component */ "./src/app/modules/admin/admin-layout/admin-layout.component.ts");
/* harmony import */ var _general_info_general_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./general-info/general-info.component */ "./src/app/modules/admin/general-info/general-info.component.ts");
/* harmony import */ var _serivce_location_layout_serivce_location_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./serivce-location-layout/serivce-location-layout.component */ "./src/app/modules/admin/serivce-location-layout/serivce-location-layout.component.ts");






var routes = [
    {
        path: '',
        component: _admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_3__["AdminLayoutComponent"],
        children: [
            {
                path: "general/:id",
                component: _general_info_general_info_component__WEBPACK_IMPORTED_MODULE_4__["GeneralInfoComponent"]
            },
            {
                path: "location/:infoId/:id",
                component: _serivce_location_layout_serivce_location_layout_component__WEBPACK_IMPORTED_MODULE_5__["SerivceLocationLayoutComponent"]
            }
        ]
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/admin/admin.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/admin/admin.module.ts ***!
  \***********************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng2_izitoast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-izitoast */ "./node_modules/ng2-izitoast/ng2-izitoast.es5.js");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-material-timepicker */ "./node_modules/ngx-material-timepicker/fesm5/ngx-material-timepicker.js");
/* harmony import */ var src_app_material_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/modules/admin/admin-routing.module.ts");
/* harmony import */ var _admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-layout/admin-layout.component */ "./src/app/modules/admin/admin-layout/admin-layout.component.ts");
/* harmony import */ var src_app_core_date_format__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/date-format */ "./src/app/core/date-format.ts");
/* harmony import */ var _general_info_general_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./general-info/general-info.component */ "./src/app/modules/admin/general-info/general-info.component.ts");
/* harmony import */ var _general_info_general_info_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./general-info/general-info.service */ "./src/app/modules/admin/general-info/general-info.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _serivce_location_layout_serivce_location_layout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./serivce-location-layout/serivce-location-layout.component */ "./src/app/modules/admin/serivce-location-layout/serivce-location-layout.component.ts");
/* harmony import */ var _location_info_location_info_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./location-info/location-info.component */ "./src/app/modules/admin/location-info/location-info.component.ts");
/* harmony import */ var _location_contact_location_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./location-contact/location-contact.component */ "./src/app/modules/admin/location-contact/location-contact.component.ts");
/* harmony import */ var _location_program_location_program_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./location-program/location-program.component */ "./src/app/modules/admin/location-program/location-program.component.ts");
/* harmony import */ var _location_facilities_location_facilities_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./location-facilities/location-facilities.component */ "./src/app/modules/admin/location-facilities/location-facilities.component.ts");
/* harmony import */ var _location_manufacturers_location_manufacturers_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./location-manufacturers/location-manufacturers.component */ "./src/app/modules/admin/location-manufacturers/location-manufacturers.component.ts");
/* harmony import */ var _location_operations_location_operations_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./location-operations/location-operations.component */ "./src/app/modules/admin/location-operations/location-operations.component.ts");
/* harmony import */ var _location_images_location_images_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./location-images/location-images.component */ "./src/app/modules/admin/location-images/location-images.component.ts");
/* harmony import */ var _location_promotions_location_promotions_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./location-promotions/location-promotions.component */ "./src/app/modules/admin/location-promotions/location-promotions.component.ts");
/* harmony import */ var _location_info_location_info_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./location-info/location-info.service */ "./src/app/modules/admin/location-info/location-info.service.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _location_info_loc_info_map_loc_info_map_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./location-info/loc-info-map/loc-info-map.component */ "./src/app/modules/admin/location-info/loc-info-map/loc-info-map.component.ts");
/* harmony import */ var _location_contact_add_location_contact_add_location_contact_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./location-contact/add-location-contact/add-location-contact.component */ "./src/app/modules/admin/location-contact/add-location-contact/add-location-contact.component.ts");
/* harmony import */ var _location_contact_delete_location_contact_delete_location_contact_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./location-contact/delete-location-contact/delete-location-contact.component */ "./src/app/modules/admin/location-contact/delete-location-contact/delete-location-contact.component.ts");
/* harmony import */ var _location_manufacturers_location_manufacturers_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./location-manufacturers/location-manufacturers.service */ "./src/app/modules/admin/location-manufacturers/location-manufacturers.service.ts");
/* harmony import */ var _location_facilities_location_facilities_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./location-facilities/location-facilities.service */ "./src/app/modules/admin/location-facilities/location-facilities.service.ts");
/* harmony import */ var _location_contact_location_contact_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./location-contact/location-contact.service */ "./src/app/modules/admin/location-contact/location-contact.service.ts");
/* harmony import */ var _location_operations_add_location_operation_add_location_operation_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./location-operations/add-location-operation/add-location-operation.component */ "./src/app/modules/admin/location-operations/add-location-operation/add-location-operation.component.ts");
/* harmony import */ var _location_operations_delete_location_operation_delete_location_operation_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./location-operations/delete-location-operation/delete-location-operation.component */ "./src/app/modules/admin/location-operations/delete-location-operation/delete-location-operation.component.ts");
/* harmony import */ var _location_images_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./location-images/image-viewer/image-viewer.component */ "./src/app/modules/admin/location-images/image-viewer/image-viewer.component.ts");




































var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_11__["AdminLayoutComponent"], _general_info_general_info_component__WEBPACK_IMPORTED_MODULE_13__["GeneralInfoComponent"], _general_info_general_info_component__WEBPACK_IMPORTED_MODULE_13__["LogoViewerComponent"], _serivce_location_layout_serivce_location_layout_component__WEBPACK_IMPORTED_MODULE_16__["SerivceLocationLayoutComponent"], _location_info_location_info_component__WEBPACK_IMPORTED_MODULE_17__["LocationInfoComponent"], _location_contact_location_contact_component__WEBPACK_IMPORTED_MODULE_18__["LocationContactComponent"], _location_program_location_program_component__WEBPACK_IMPORTED_MODULE_19__["LocationProgramComponent"], _location_facilities_location_facilities_component__WEBPACK_IMPORTED_MODULE_20__["LocationFacilitiesComponent"], _location_manufacturers_location_manufacturers_component__WEBPACK_IMPORTED_MODULE_21__["LocationManufacturersComponent"], _location_operations_location_operations_component__WEBPACK_IMPORTED_MODULE_22__["LocationOperationsComponent"], _location_images_location_images_component__WEBPACK_IMPORTED_MODULE_23__["LocationImagesComponent"], _location_promotions_location_promotions_component__WEBPACK_IMPORTED_MODULE_24__["LocationPromotionsComponent"], _location_info_loc_info_map_loc_info_map_component__WEBPACK_IMPORTED_MODULE_27__["LocInfoMapComponent"], _location_contact_add_location_contact_add_location_contact_component__WEBPACK_IMPORTED_MODULE_28__["AddLocationContactComponent"], _location_contact_delete_location_contact_delete_location_contact_component__WEBPACK_IMPORTED_MODULE_29__["DeleteLocationContactComponent"], _location_operations_add_location_operation_add_location_operation_component__WEBPACK_IMPORTED_MODULE_33__["AddLocationOperationComponent"], _location_operations_delete_location_operation_delete_location_operation_component__WEBPACK_IMPORTED_MODULE_34__["DeleteLocationOperationComponent"], _location_images_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_35__["ImageViewerComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_10__["AdminRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                src_app_material_material_module__WEBPACK_IMPORTED_MODULE_9__["DemoMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ng2_izitoast__WEBPACK_IMPORTED_MODULE_6__["Ng2IziToastModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["CoreModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_7__["ScrollToModule"].forRoot(),
                _agm_core__WEBPACK_IMPORTED_MODULE_26__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyAU2yqZKf_fmbeMaRMzFUpkJf_ofXmX9Eg'
                }),
                ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_8__["NgxMaterialTimepickerModule"]
            ],
            providers: [
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"], useClass: src_app_core_date_format__WEBPACK_IMPORTED_MODULE_12__["AppDateAdapter"]
                },
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_FORMATS"], useValue: src_app_core_date_format__WEBPACK_IMPORTED_MODULE_12__["APP_DATE_FORMATS"]
                },
                _general_info_general_info_service__WEBPACK_IMPORTED_MODULE_14__["GeneralInfoService"],
                _location_info_location_info_service__WEBPACK_IMPORTED_MODULE_25__["LocationInfoService"],
                _location_manufacturers_location_manufacturers_service__WEBPACK_IMPORTED_MODULE_30__["LocationManufacturersService"],
                _location_facilities_location_facilities_service__WEBPACK_IMPORTED_MODULE_31__["LocationFacilitiesService"],
                _location_contact_location_contact_service__WEBPACK_IMPORTED_MODULE_32__["LocationContactService"]
            ],
            entryComponents: [
                _general_info_general_info_component__WEBPACK_IMPORTED_MODULE_13__["LogoViewerComponent"],
                _location_info_loc_info_map_loc_info_map_component__WEBPACK_IMPORTED_MODULE_27__["LocInfoMapComponent"],
                _location_contact_add_location_contact_add_location_contact_component__WEBPACK_IMPORTED_MODULE_28__["AddLocationContactComponent"],
                _location_contact_delete_location_contact_delete_location_contact_component__WEBPACK_IMPORTED_MODULE_29__["DeleteLocationContactComponent"],
                _location_operations_add_location_operation_add_location_operation_component__WEBPACK_IMPORTED_MODULE_33__["AddLocationOperationComponent"],
                _location_operations_delete_location_operation_delete_location_operation_component__WEBPACK_IMPORTED_MODULE_34__["DeleteLocationOperationComponent"],
                _location_images_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_35__["ImageViewerComponent"]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/modules/admin/general-info/general-info.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/admin/general-info/general-info.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-container {\n  max-width: 200px;\n  max-height: 200px;\n  position: relative;\n}\n.image-container img {\n  min-height: 100px;\n  max-width: 200px;\n  max-height: 200px;\n}\n.image-container .mat-mini-fab {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -20px;\n  margin-top: -20px;\n  display: none;\n  background-color: white;\n}\n.image-container:hover .overlay-picture {\n  display: block;\n}\n.image-container:hover .mat-mini-fab {\n  display: block;\n}\n.overlay-picture {\n  position: absolute;\n  background-color: blue;\n  top: 0;\n  left: 0;\n  opacity: 0.2;\n  width: 100%;\n  height: 100%;\n  display: none;\n}\n.image-container img:hover {\n  background: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9nZW5lcmFsLWluZm8vQzpcXFVzZXJzXFxhbmRyZWkuZnVuYXJ1XFxEZXNrdG9wXFxMaWNlbnRhXFxlU2VydmljZVxcZVNlcnZpY2VcXENsaWVudEFwcC9zcmNcXGFwcFxcbW9kdWxlc1xcYWRtaW5cXGdlbmVyYWwtaW5mb1xcZ2VuZXJhbC1pbmZvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL2dlbmVyYWwtaW5mby9nZW5lcmFsLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNERjtBREdFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDREo7QURJRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDRko7QURRQTtFQUNFLGNBQUE7QUNMRjtBRFFBO0VBQ0UsY0FBQTtBQ0xGO0FEUUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDTEY7QURRQTtFQUNFLGdCQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluL2dlbmVyYWwtaW5mby9nZW5lcmFsLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5pbWFnZS1jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogMjAwcHg7XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBpbWcge1xyXG4gICAgbWluLWhlaWdodDoxMDBweDtcclxuICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICB9XHJcblxyXG4gIC5tYXQtbWluaS1mYWIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDotMjBweDtcclxuICAgIG1hcmdpbi10b3A6LTIwcHg7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi5pbWFnZS1jb250YWluZXI6aG92ZXIgLm92ZXJsYXktcGljdHVyZXtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmltYWdlLWNvbnRhaW5lcjpob3ZlciAubWF0LW1pbmktZmFie1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ub3ZlcmxheS1waWN0dXJlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBvcGFjaXR5OiAuMjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmltYWdlLWNvbnRhaW5lciBpbWc6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IGJsdWU7XHJcbn1cclxuIiwiLmltYWdlLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbn1cbi5pbWFnZS1jb250YWluZXIgLm1hdC1taW5pLWZhYiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5pbWFnZS1jb250YWluZXI6aG92ZXIgLm92ZXJsYXktcGljdHVyZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaW1hZ2UtY29udGFpbmVyOmhvdmVyIC5tYXQtbWluaS1mYWIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm92ZXJsYXktcGljdHVyZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAwLjI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5pbWFnZS1jb250YWluZXIgaW1nOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogYmx1ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/admin/general-info/general-info.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/admin/general-info/general-info.component.ts ***!
  \**********************************************************************/
/*! exports provided: GeneralInfoComponent, LogoViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralInfoComponent", function() { return GeneralInfoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoViewerComponent", function() { return LogoViewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _general_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./general-info.service */ "./src/app/modules/admin/general-info/general-info.service.ts");
/* harmony import */ var src_app_core_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/loader/loader.service */ "./src/app/core/loader/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_izitoast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-izitoast */ "./node_modules/ng2-izitoast/ng2-izitoast.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_core_models_service_info__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/models/service-info */ "./src/app/core/models/service-info.ts");











var GeneralInfoComponent = /** @class */ (function () {
    function GeneralInfoComponent(iziToast, authService, route, router, generalInfoService, loaderService, dialog, fb) {
        this.iziToast = iziToast;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.generalInfoService = generalInfoService;
        this.loaderService = loaderService;
        this.dialog = dialog;
        this.fb = fb;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email,
        ]);
    }
    GeneralInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.info = new src_app_core_models_service_info__WEBPACK_IMPORTED_MODULE_10__["ServiceInfo"]();
        this.info.logo = "/images/Placeholder/Service-logo.jpg";
        this.CreateFormControl();
        this.authService.GetUser().subscribe(function (e) {
            _this.user = e;
            _this.genInfoId = parseInt(_this.route.snapshot.paramMap.get('id'));
            if (_this.genInfoId != 0)
                _this.GetGeneralInfo(_this.genInfoId);
        });
    };
    GeneralInfoComponent.prototype.CreateFormControl = function () {
        this.genInfoForm = this.fb.group({
            name: [this.info.nume, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            descriere: [this.info.descriere],
            adresaSediuSocial: [this.info.adresaSediuSocial],
            numeDelegat: [this.info.numeDelegat],
            telefonDelegat: [this.info.telefonDelegat],
            email: [this.info.emailDelegat, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]
        });
    };
    GeneralInfoComponent.prototype.displayPhoto = function (fileInput) {
        var _this = this;
        if (this.genInfoId == 0) {
            this.iziToast.warning({
                message: "Poza incarcata cu success!",
                position: "bottomCenter"
            });
        }
        if (fileInput.length === 0)
            return;
        var formData = new FormData();
        for (var _i = 0, fileInput_1 = fileInput; _i < fileInput_1.length; _i++) {
            var file = fileInput_1[_i];
            formData.append(file.name, file);
            var fileName = file.name;
        }
        this.loaderService.show();
        this.generalInfoService.UploadLogoImage(formData, this.genInfoId).subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpEventType"].UploadProgress)
                _this.progress = Math.round(100 * event.loaded / event.total);
            else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpEventType"].Response) {
                _this.loaderService.hide();
                if (event.body == true) {
                    setTimeout(function () {
                        _this.iziToast.success({
                            message: "Poza incarcata cu success!",
                            position: "bottomCenter"
                        });
                        _this.info.logo = "https://eservice.blob.core.windows.net/serviceslogothumbnails/" + _this.genInfoId + "/" + fileName;
                    }, 2000);
                }
                else {
                    _this.iziToast.error({
                        message: "A aparut o problema la incarcarea pozei, incercati din nou!",
                        position: "bottomCenter"
                    });
                }
            }
        });
    };
    GeneralInfoComponent.prototype.GetGeneralInfo = function (id) {
        var _this = this;
        this.loaderService.show();
        this.generalInfoService.GetServiceInfoByUserId(this.user.id).subscribe(function (e) {
            _this.loaderService.hide();
            _this.info = e;
            if (!_this.info.logo) {
                _this.info.logo = "/images/Placeholder/Service-logo.jpg";
            }
            else {
                _this.info.logo = "https://eservice.blob.core.windows.net/serviceslogothumbnails/" + _this.info.serviceInfoId + "/" + _this.info.logo;
            }
            _this.CreateFormControl();
        });
    };
    GeneralInfoComponent.prototype.AddUpdateGeneralInfo = function () {
        var _this = this;
        if (this.genInfoId == 0) {
            if (this.genInfoForm.valid) {
                this.loaderService.show();
                var infoAdd = {
                    nume: this.genInfoForm.value.name,
                    descriere: this.genInfoForm.value.descriere,
                    adresaSediuSocial: this.genInfoForm.value.adresaSediuSocial,
                    numeDelegat: this.genInfoForm.value.numeDelegat,
                    telefonDelegat: this.genInfoForm.value.telefonDelegat,
                    emailDelegat: this.genInfoForm.value.email
                };
                if (this.genInfoId == 0) {
                    this.generalInfoService.AddServiceInfo(infoAdd).subscribe(function (e) {
                        _this.loaderService.hide();
                    });
                }
                else {
                    infoAdd.serviceInfoId = this.genInfoId;
                    this.generalInfoService.EditServiceInfo(infoAdd, this.genInfoId).subscribe(function (e) {
                        _this.loaderService.hide();
                        if (e == true) {
                            _this.iziToast.success({
                                message: "Informatii editate cu succes!",
                                position: "bottomCenter"
                            });
                        }
                        else {
                            _this.iziToast.error({
                                message: "Informatiile editate nu au putut fi salvate, incercati din nou!",
                                position: "bottomCenter"
                            });
                        }
                    });
                }
            }
        }
        else {
        }
    };
    GeneralInfoComponent.prototype.OpenLogoViewer = function () {
        var dialogRef = this.dialog.open(LogoViewerComponent, {
            data: { filename: this.info.logo, service: this.info.nume }
        });
    };
    GeneralInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-general-info',
            template: __webpack_require__(/*! raw-loader!./general-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin/general-info/general-info.component.html"),
            host: {
                class: 'app-general-info'
            },
            styles: [__webpack_require__(/*! ./general-info.component.scss */ "./src/app/modules/admin/general-info/general-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng2_izitoast__WEBPACK_IMPORTED_MODULE_8__["Ng2IzitoastService"],
            src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _general_info_service__WEBPACK_IMPORTED_MODULE_5__["GeneralInfoService"],
            src_app_core_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], GeneralInfoComponent);
    return GeneralInfoComponent;
}());

var LogoViewerComponent = /** @class */ (function () {
    function LogoViewerComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.logo = data.filename.replace("serviceslogothumbnails", "serviceslogo");
    }
    LogoViewerComponent.prototype.CloseDialog = function () {
        this.dialogRef.close();
    };
    LogoViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'logo-viewer',
            template: __webpack_require__(/*! raw-loader!./logo-viewer.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin/general-info/logo-viewer.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_9__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogRef"], Object])
    ], LogoViewerComponent);
    return LogoViewerComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/general-info/general-info.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/admin/general-info/general-info.service.ts ***!
  \********************************************************************/
/*! exports provided: GeneralInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralInfoService", function() { return GeneralInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var GeneralInfoService = /** @class */ (function () {
    function GeneralInfoService(http) {
        this.http = http;
        this.baseUrl = "/api/ServiceGeneralInfo";
    }
    GeneralInfoService.prototype.AddServiceInfo = function (info) {
        return this.http.post(this.baseUrl, info);
    };
    GeneralInfoService.prototype.EditServiceInfo = function (info, id) {
        return this.http.put(this.baseUrl + id, info);
    };
    GeneralInfoService.prototype.GetServiceInfoByUserId = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("id", id.toString());
        return this.http.get(this.baseUrl + "/GetByUserId", { params: params });
    };
    GeneralInfoService.prototype.UploadLogoImage = function (formData, serviceId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("serviceId", serviceId.toString());
        var uploadReq = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.baseUrl + "/UploadLogoImage", formData, {
            reportProgress: true,
            params: params
        });
        return this.http.request(uploadReq);
    };
    GeneralInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GeneralInfoService);
    return GeneralInfoService;
}());



/***/ }),

/***/ "./src/app/modules/admin/location-contact/add-location-contact/add-location-contact.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/admin/location-contact/add-location-contact/add-location-contact.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbG9jYXRpb24tY29udGFjdC9hZGQtbG9jYXRpb24tY29udGFjdC9hZGQtbG9jYXRpb24tY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/admin/location-contact/add-location-contact/add-location-contact.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/admin/location-contact/add-location-contact/add-location-contact.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: AddLocationContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLocationContactComponent", function() { return AddLocationContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_core_models_service_location_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/models/service-location-contact */ "./src/app/core/models/service-location-contact.ts");




var AddLocationContactComponent = /** @class */ (function () {
    function AddLocationContactComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    AddLocationContactComponent.prototype.ngOnInit = function () {
        if (this.data.contact == null || this.data.contact == undefined) {
            this.data.contact = new src_app_core_models_service_location_contact__WEBPACK_IMPORTED_MODULE_3__["ServiceLocationContact"]();
        }
    };
    AddLocationContactComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddLocationContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-location-contact',
            template: __webpack_require__(/*! raw-loader!./add-location-contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin/location-contact/add-location-contact/add-location-contact.component.html"),
            styles: [__webpack_require__(/*! ./add-location-contact.component.scss */ "./src/app/modules/admin/location-contact/add-location-contact/add-location-contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], AddLocationContactComponent);
    return AddLocationContactComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/location-contact/delete-location-contact/delete-location-contact.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/admin/location-contact/delete-location-contact/delete-location-contact.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbG9jYXRpb24tY29udGFjdC9kZWxldGUtbG9jYXRpb24tY29udGFjdC9kZWxldGUtbG9jYXRpb24tY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/admin/location-contact/delete-location-contact/delete-location-contact.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/admin/location-contact/delete-location-contact/delete-location-contact.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: DeleteLocationContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteLocationContactComponent", function() { return DeleteLocationContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_core_models_service_location_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/models/service-location-contact */ "./src/app/core/models/service-location-contact.ts");




var DeleteLocationContactComponent = /** @class */ (function () {
    function DeleteLocationContactComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DeleteLocationContactComponent.prototype.ngOnInit = function () {
    };
    DeleteLocationContactComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DeleteLocationContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-location-contact',
            template: __webpack_require__(/*! raw-loader!./delete-location-contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin/location-contact/delete-location-contact/delete-location-contact.component.html"),
            styles: [__webpack_require__(/*! ./delete-location-contact.component.scss */ "./src/app/modules/admin/location-contact/delete-location-contact/delete-location-contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            src_app_core_models_service_location_contact__WEBPACK_IMPORTED_MODULE_3__["ServiceLocationContact"]])
    ], DeleteLocationContactComponent);
    return DeleteLocationContactComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/location-contact/location-contact.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/admin/location-contact/location-contact.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbG9jYXRpb24tY29udGFjdC9sb2NhdGlvbi1jb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/admin/location-contact/location-contact.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/admin/location-contact/location-contact.component.ts ***!
  \******************************************************************************/
/*! exports provided: LocationContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationContactComponent", function() { return LocationContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/loader/loader.service */ "./src/app/core/loader/loader.service.ts");
/* harmony import */ var ng2_izitoast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-izitoast */ "./node_modules/ng2-izitoast/ng2-izitoast.es5.js");
/* harmony import */ var _location_contact_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./location-contact.service */ "./src/app/modules/admin/location-contact/location-contact.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _add_location_contact_add_location_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-location-contact/add-location-contact.component */ "./src/app/modules/admin/location-contact/add-location-contact/add-location-contact.component.ts");
/* harmony import */ var _delete_location_contact_delete_location_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./delete-location-contact/delete-location-contact.component */ "./src/app/modules/admin/location-contact/delete-location-contact/delete-location-contact.component.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_core_models_service_location_contact__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/models/service-location-contact */ "./src/app/core/models/service-location-contact.ts");











var ShownContact = /** @class */ (function () {
    function ShownContact() {
    }
    return ShownContact;
}());
var LocationContactComponent = /** @class */ (function () {
    function LocationContactComponent(route, loaderService, iziToast, contactService, dialog) {
        var _this = this;
        this.route = route;
        this.loaderService = loaderService;
        this.iziToast = iziToast;
        this.contactService = contactService;
        this.dialog = dialog;
        this.firstTime = true;
        this.hasCTypes = false;
        this.displayedColumns = ['icon', 'value', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.shownContacts);
        route.params.subscribe(function (val) {
            _this.locationId = parseInt(_this.route.snapshot.paramMap.get('id'));
            _this.servInfoId = parseInt(_this.route.snapshot.paramMap.get('infoId'));
            if (!_this.firstTime) {
                _this.GetLocationContact(_this.locationId);
            }
        });
    }
    LocationContactComponent.prototype.ngOnChanges = function () {
        if (this.contactTypes) {
            this.hasCTypes = true;
            this.firstTime = false;
            this.GetLocationContact(this.locationId);
        }
    };
    LocationContactComponent.prototype.ngOnInit = function () {
    };
    LocationContactComponent.prototype.GetLocationContact = function (item) {
        var _this = this;
        this.loaderService.show();
        this.locationContacts = [];
        this.contactService.GetContacts(item).subscribe(function (e) {
            _this.loaderService.hide();
            _this.locationContacts = e;
            _this.shownContacts = [];
            _this.locationContacts.forEach(function (e) {
                _this.shownContacts.push({
                    id: e.serviceLocationContactId,
                    type: _this.contactTypes.filter(function (z) { return z.contactTypeId == e.contactTypeId; })[0].name,
                    icon: _this.contactTypes.filter(function (z) { return z.contactTypeId == e.contactTypeId; })[0].icon,
                    value: e.value
                });
            });
            _this.SetDataSource();
        });
    };
    LocationContactComponent.prototype.SetDataSource = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.shownContacts);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    LocationContactComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    LocationContactComponent.prototype.AddContact = function () {
        var _this = this;
        this._addContact = new src_app_core_models_service_location_contact__WEBPACK_IMPORTED_MODULE_10__["ServiceLocationContact"]();
        var dialogRef = this.dialog.open(_add_location_contact_add_location_contact_component__WEBPACK_IMPORTED_MODULE_7__["AddLocationContactComponent"], {
            width: '350px',
            data: {
                types: this.contactTypes,
                contact: this._addContact
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != undefined && result != null) {
                _this._addContact = result.contact;
                _this._addContact.serviceLocationId = _this.locationId;
                _this.AddContactConfirm();
            }
        });
    };
    LocationContactComponent.prototype.AddContactConfirm = function () {
        var _this = this;
        this.loaderService.show();
        this.contactService.SaveContact(this._addContact).subscribe(function (e) {
            _this.loaderService.hide();
            if (e == 0) {
                _this.iziToast.error({
                    message: "A aparut o eroare, incercati din nou!",
                    position: "bottomCenter"
                });
            }
            else {
                _this._addContact.serviceLocationContactId = e;
                _this.locationContacts.unshift(_this._addContact);
                _this.shownContacts.unshift({
                    id: e,
                    type: _this.contactTypes.filter(function (z) { return z.contactTypeId == _this._addContact.contactTypeId; })[0].name,
                    icon: _this.contactTypes.filter(function (z) { return z.contactTypeId == _this._addContact.contactTypeId; })[0].icon,
                    value: _this._addContact.value
                });
                _this.SetDataSource();
            }
        });
    };
    LocationContactComponent.prototype.DeleteContact = function (item) {
        var _this = this;
        var dialogRef = this.dialog.open(_delete_location_contact_delete_location_contact_component__WEBPACK_IMPORTED_MODULE_8__["DeleteLocationContactComponent"], {
            width: '250px',
            data: this.locationContacts.filter(function (e) { return e.serviceLocationContactId == item.id; })[0]
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result != undefined) {
                _this.loaderService.show();
                _this.contactService.DeleteContact(item.id).subscribe(function (response) {
                    _this.loaderService.hide();
                    if (response == false) {
                        _this.iziToast.error({
                            message: "A aparut o eroare, incercati din nou!",
                            position: "bottomCenter"
                        });
                    }
                    else {
                        lodash__WEBPACK_IMPORTED_MODULE_9__["remove"](_this.locationContacts, function (e) { return e.serviceLocationContactId == item.id; });
                        var idx = _this.shownContacts.indexOf(item);
                        _this.shownContacts.splice(idx, 1);
                        _this.SetDataSource();
                    }
                }, function (error) {
                    _this.iziToast.error({
                        message: "A aparut o eroare, incercati din nou!",
                        position: "bottomCenter"
                    });
                });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ctypes'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], LocationContactComponent.prototype, "contactTypes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"])
    ], LocationContactComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"])
    ], LocationContactComponent.prototype, "paginator", void 0);
    LocationContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-location-contact',
            template: __webpack_require__(/*! raw-loader!./location-contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin/location-contact/location-contact.component.html"),
            styles: [__webpack_require__(/*! ./location-contact.component.scss */ "./src/app/modules/admin/location-contact/location-contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_core_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
            ng2_izitoast__WEBPACK_IMPORTED_MODULE_4__["Ng2IzitoastService"],
            _location_contact_service__WEBPACK_IMPORTED_MODULE_5__["LocationContactService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], LocationContactComponent);
    return LocationContactComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/location-contact/location-contact.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/admin/location-contact/location-contact.service.ts ***!
  \****************************************************************************/
/*! exports provided: LocationContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationContactService", function() { return LocationContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LocationContactService = /** @class */ (function () {
    function LocationContactService(http) {
        this.http = http;
        this.baseUrl = "/api/LocationContact/";
    }
    LocationContactService.prototype.GetContacts = function (locationId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("locationId", locationId.toString());
        return this.http.get(this.baseUrl + "GetByLocationId", { params: params });
    };
    LocationContactService.prototype.SaveContact = function (contact) {
        return this.http.post(this.baseUrl, contact);
    };
    LocationContactService.prototype.DeleteContact = function (contactId) {
        return this.http.delete(this.baseUrl + contactId);
    };
    LocationContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LocationContactService);
    return LocationContactService;
}());



/***/ }),

/***/ "./src/app/modules/admin/location-facilities/location-facilities.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/admin/location-facilities/location-facilities.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbG9jYXRpb24tZmFjaWxpdGllcy9sb2NhdGlvbi1mYWNpbGl0aWVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/admin/location-facilities/location-facilities.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/admin/location-facilities/location-facilities.component.ts ***!
  \************************************************************************************/
/*! exports provided: LocationFacilitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationFacilitiesComponent", function() { return LocationFacilitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _location_facilities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location-facilities.service */ "./src/app/modules/admin/location-facilities/location-facilities.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/loader/loader.service */ "./src/app/core/loader/loader.service.ts");
/* harmony import */ var ng2_izitoast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-izitoast */ "./node_modules/ng2-izitoast/ng2-izitoast.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var ShownFacility = /** @class */ (function () {
    function ShownFacility() {
    }
    return ShownFacility;
}());
var LocationFacilitiesComponent = /** @class */ (function () {
    function LocationFacilitiesComponent(route, loaderService, iziToast, facilityService, dialog) {
        var _this = this;
        this.route = route;
        this.loaderService = loaderService;
        this.iziToast = iziToast;
        this.facilityService = facilityService;
        this.dialog = dialog;
        this.firstTime = true;
        this.displayedColumns = ['icon', 'name', 'id'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.shownFacilities);
        this.hasFacilities = false;
        route.params.subscribe(function (val) {
            _this.locationId = parseInt(_this.route.snapshot.paramMap.get('id'));
            _this.servInfoId = parseInt(_this.route.snapshot.paramMap.get('infoId'));
            if (!_this.firstTime) {
                _this.GetFacilities(_this.locationId);
            }
        });
    }
    LocationFacilitiesComponent.prototype.ngOnChanges = function () {
        if (this.facilities) {
            this.hasFacilities = true;
            this.firstTime = false;
            this.GetFacilities(this.locationId);
        }
    };
    LocationFacilitiesComponent.prototype.ngOnInit = function () {
    };
    LocationFacilitiesComponent.prototype.GetFacilities = function (item) {
        var _this = this;
        this.loaderService.show();
        this.locationFacilities = [];
        this.facilityService.GetFacilties(item).subscribe(function (e) {
            _this.loaderService.hide();
            _this.locationFacilities = e;
            _this.shownFacilities = [];
            _this.facilities.forEach(function (e) {
                _this.shownFacilities.push({
                    id: _this.locationFacilities.filter(function (z) { return z.serviceFacilityId == e.serviceFacilityId; }).length > 0 ?
                        _this.locationFacilities.filter(function (z) { return z.serviceFacilityId == e.serviceFacilityId; })[0].serviceLocationFacilityId : 0,
                    name: e.name,
                    icon: e.icon,
                    facilityId: e.serviceFacilityId
                });
            });
            _this.locationFacilities.forEach(function (e) {
            });
            _this.SetDataSource();
        });
    };
    LocationFacilitiesComponent.prototype.SetDataSource = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.shownFacilities);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    LocationFacilitiesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    LocationFacilitiesComponent.prototype.AddFacility = function (element) {
        var _this = this;
        this.loaderService.show();
        var fac = { serviceFacilityId: element.facilityId, serviceLocationId: this.locationId };
        this.facilityService.SaveFacility(fac).subscribe(function (e) {
            _this.loaderService.hide();
            if (e == 0) {
                _this.iziToast.error({
                    message: "A aparut o eroare, incercati din nou!",
                    position: "bottomCenter"
                });
            }
            else {
                _this.locationFacilities.unshift({ serviceLocationId: _this.locationId, serviceFacilityId: element.facilityId, serviceLocationFacilityId: e });
                element.id = e;
                _this.iziToast.success({
                    message: "Facilitatea a fost adaugata cu succes!",
                    position: "bottomCenter"
                });
            }
        });
    };
    LocationFacilitiesComponent.prototype.DeleteFacility = function (element) {
        var _this = this;
        this.loaderService.show();
        this.facilityService.DeleteFacility(element.id).subscribe(function (response) {
            _this.loaderService.hide();
            if (response == false) {
                _this.iziToast.error({
                    message: "A aparut o eroare, incercati din nou!",
                    position: "bottomCenter"
                });
            }
            else {
                element.id = 0;
                _this.iziToast.success({
                    message: "Facilitatea a fost stearsa cu succes!",
                    position: "bottomCenter"
                });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"])
    ], LocationFacilitiesComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"])
    ], LocationFacilitiesComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('facilities'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], LocationFacilitiesComponent.prototype, "facilities", void 0);
    LocationFacilitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-location-facilities',
            template: __webpack_require__(/*! raw-loader!./location-facilities.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin/location-facilities/location-facilities.component.html"),
            styles: [__webpack_require__(/*! ./location-facilities.component.scss */ "./src/app/modules/admin/location-facilities/location-facilities.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_core_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            ng2_izitoast__WEBPACK_IMPORTED_MODULE_5__["Ng2IzitoastService"],
            _location_facilities_service__WEBPACK_IMPORTED_MODULE_2__["LocationFacilitiesService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], LocationFacilitiesComponent);
    return LocationFacilitiesComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/location-facilities/location-facilities.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/admin/location-facilities/location-facilities.service.ts ***!
  \**********************************************************************************/
/*! exports provided: LocationFacilitiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationFacilitiesService", function() { return LocationFacilitiesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LocationFacilitiesService = /** @class */ (function () {
    function LocationFacilitiesService(http) {
        this.http = http;
        this.baseUrl = "/api/LocationFacility/";
    }
    LocationFacilitiesService.prototype.GetFacilties = function (locationId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("locationId", locationId.toString());
        return this.http.get(this.baseUrl + "GetByLocationId", { params: params });
    };
    LocationFacilitiesService.prototype.SaveFacility = function (contact) {
        return this.http.post(this.baseUrl, contact);
    };
    LocationFacilitiesService.prototype.DeleteFacility = function (contactId) {
        return this.http.delete(this.baseUrl + contactId);
    };
    LocationFacilitiesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LocationFacilitiesService);
    return LocationFacilitiesService;
}());



/***/ }),

/***/ "./src/app/modules/admin/location-images/image-viewer/image-viewer.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/admin/location-images/image-viewer/image-viewer.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.image-viewer-container {\n  height: 75vh;\n  width: 80vw;\n}\n\n.arrow-wrapper:hover .arrow-wrapper {\n  color: darkblue;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9sb2NhdGlvbi1pbWFnZXMvaW1hZ2Utdmlld2VyL0M6XFxVc2Vyc1xcYW5kcmVpLmZ1bmFydVxcRGVza3RvcFxcTGljZW50YVxcZVNlcnZpY2VcXGVTZXJ2aWNlXFxDbGllbnRBcHAvc3JjXFxhcHBcXG1vZHVsZXNcXGFkbWluXFxsb2NhdGlvbi1pbWFnZXNcXGltYWdlLXZpZXdlclxcaW1hZ2Utdmlld2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL2xvY2F0aW9uLWltYWdlcy9pbWFnZS12aWV3ZXIvaW1hZ2Utdmlld2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbG9jYXRpb24taW1hZ2VzL2ltYWdlLXZpZXdlci9pbWFnZS12aWV3ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XHJcbiAgbWF4LXdpZHRoOjEwMCU7XHJcbiAgbWF4LWhlaWdodDoxMDAlO1xyXG59XHJcblxyXG4uaW1hZ2Utdmlld2VyLWNvbnRhaW5lcntcclxuICBoZWlnaHQ6IDc1dmg7XHJcbiAgd2lkdGg6IDgwdnc7XHJcbiBcclxufVxyXG5cclxuLmFycm93LXdyYXBwZXI6aG92ZXIgLmFycm93LXdyYXBwZXJ7XHJcbiAgY29sb3I6IGRhcmtibHVlO1xyXG4gIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbiIsImltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLmltYWdlLXZpZXdlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDc1dmg7XG4gIHdpZHRoOiA4MHZ3O1xufVxuXG4uYXJyb3ctd3JhcHBlcjpob3ZlciAuYXJyb3ctd3JhcHBlciB7XG4gIGNvbG9yOiBkYXJrYmx1ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/admin/location-images/image-viewer/image-viewer.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/admin/location-images/image-viewer/image-viewer.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ImageViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageViewerComponent", function() { return ImageViewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ImageViewerComponent = /** @class */ (function () {
    function ImageViewerComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        console.log(data);
    }
    ImageViewerComponent.prototype.GetSrc = function (photo) {
        return "https://eservice.blob.core.windows.net/serviceimages/" + this.data.locationId + "/" + photo.link;
    };
    ImageViewerComponent.prototype.MoveLeft = function () {
        var idx = this.data.allPhotos.map(function (e) { return e.serviceLocationPhotoId; }).indexOf(this.data.selected.serviceLocationPhotoId);
        if (idx == 0) {
            this.data.selected = this.data.allPhotos[this.data.allPhotos.length - 1];
        }
        else {
            this.data.selected = this.data.allPhotos[idx - 1];
        }
    };
    ImageViewerComponent.prototype.MoveRight = function () {
        var idx = this.data.allPhotos.map(function (e) { return e.serviceLocationPhotoId; }).indexOf(this.data.selected.serviceLocationPhotoId);
        if (idx == this.data.allPhotos.length - 1) {
            this.data.selected = this.data.allPhotos[0];
        }
        else {
            this.data.selected = this.data.allPhotos[idx + 1];
        }
    };
    ImageViewerComponent.prototype.CloseDialog = function () {
        this.dialogRef.close();
    };
    ImageViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-viewer',
            template: __webpack_require__(/*! raw-loader!./image-viewer.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin/location-images/image-viewer/image-viewer.component.html"),
            styles: [__webpack_require__(/*! ./image-viewer.component.scss */ "./src/app/modules/admin/location-images/image-viewer/image-viewer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], ImageViewerComponent);
    return ImageViewerComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/location-images/location-images.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/admin/location-images/location-images.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-flex {\n  height: 200px;\n  overflow: hidden;\n  margin: 10px;\n  width: calc(25% - 20px);\n  max-width: calc(25% - 20px);\n  position: relative;\n}\n.img-flex .mat-mini-fab {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -20px;\n  margin-top: -20px;\n  display: none;\n  background-color: white;\n}\n.overlay-picture {\n  position: absolute;\n  background-color: blue;\n  top: 0;\n  left: 0;\n  opacity: 0.2;\n  width: 100%;\n  height: 100%;\n  display: none;\n}\n.img-flex:hover .mat-mini-fab {\n  display: block;\n}\n.img-flex:hover .overlay-picture {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9sb2NhdGlvbi1pbWFnZXMvQzpcXFVzZXJzXFxhbmRyZWkuZnVuYXJ1XFxEZXNrdG9wXFxMaWNlbnRhXFxlU2VydmljZVxcZVNlcnZpY2VcXENsaWVudEFwcC9zcmNcXGFwcFxcbW9kdWxlc1xcYWRtaW5cXGxvY2F0aW9uLWltYWdlc1xcbG9jYXRpb24taW1hZ2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL2xvY2F0aW9uLWltYWdlcy9sb2NhdGlvbi1pbWFnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURDRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDQ0o7QURHQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNBRjtBREdBO0VBQ0UsY0FBQTtBQ0FGO0FER0E7RUFDRSxjQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluL2xvY2F0aW9uLWltYWdlcy9sb2NhdGlvbi1pbWFnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWZsZXgge1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgd2lkdGg6IGNhbGMoMjUlIC0gMjBweCk7XHJcbiAgbWF4LXdpZHRoOiBjYWxjKDI1JSAtIDIwcHgpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLm1hdC1taW5pLWZhYiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcclxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuLm92ZXJsYXktcGljdHVyZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgb3BhY2l0eTogLjI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5pbWctZmxleDpob3ZlciAubWF0LW1pbmktZmFiIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmltZy1mbGV4OmhvdmVyIC5vdmVybGF5LXBpY3R1cmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiIsIi5pbWctZmxleCB7XG4gIGhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMTBweDtcbiAgd2lkdGg6IGNhbGMoMjUlIC0gMjBweCk7XG4gIG1heC13aWR0aDogY2FsYygyNSUgLSAyMHB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmltZy1mbGV4IC5tYXQtbWluaS1mYWIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ub3ZlcmxheS1waWN0dXJlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDAuMjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmltZy1mbGV4OmhvdmVyIC5tYXQtbWluaS1mYWIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmltZy1mbGV4OmhvdmVyIC5vdmVybGF5LXBpY3R1cmUge1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/admin/location-images/location-images.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/admin/location-images/location-images.component.ts ***!
  \****************************************************************************/
/*! exports provided: LocationImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationImagesComponent", function() { return LocationImagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/loader/loader.service */ "./src/app/core/loader/loader.service.ts");
/* harmony import */ var ng2_izitoast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-izitoast */ "./node_modules/ng2-izitoast/ng2-izitoast.es5.js");
/* harmony import */ var _location_images_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./location-images.service */ "./src/app/modules/admin/location-images/location-images.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./image-viewer/image-viewer.component */ "./src/app/modules/admin/location-images/image-viewer/image-viewer.component.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");










var LocationImagesComponent = /** @class */ (function () {
    function LocationImagesComponent(route, loaderService, iziToast, imagesService, dialog) {
        var _this = this;
        this.route = route;
        this.loaderService = loaderService;
        this.iziToast = iziToast;
        this.imagesService = imagesService;
        this.dialog = dialog;
        route.params.subscribe(function (val) {
            _this.locationId = parseInt(_this.route.snapshot.paramMap.get('id'));
            _this.servInfoId = parseInt(_this.route.snapshot.paramMap.get('infoId'));
            _this.GetImages(_this.locationId);
        });
    }
    LocationImagesComponent.prototype.ngOnChanges = function () { };
    LocationImagesComponent.prototype.ngOnInit = function () {
    };
    LocationImagesComponent.prototype.GetSrc = function (photo) {
        return "https://eservice.blob.core.windows.net/serviceimagesthumbnails/" + this.locationId + "/" + photo.link;
    };
    LocationImagesComponent.prototype.OpenImage = function (photo) {
        var dialogRef = this.dialog.open(_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_7__["ImageViewerComponent"], {
            data: {
                selected: Object.assign({}, photo),
                allPhotos: Object.assign([], this.photos),
                locationId: this.locationId
            }
        });
    };
    LocationImagesComponent.prototype.GetImages = function (id) {
        var _this = this;
        this.loaderService.show();
        this.photos = [];
        this.imagesService.GetPhotos(id).subscribe(function (e) {
            _this.loaderService.hide();
            _this.photos = e;
            _this.photos = lodash__WEBPACK_IMPORTED_MODULE_8__["sortBy"](_this.photos, function (e) { return e.position; });
        });
    };
    LocationImagesComponent.prototype.DeleteImage = function (photo) {
        var _this = this;
        this.loaderService.show();
        this.imagesService.DeletePhoto(photo.serviceLocationPhotoId).subscribe(function (e) {
            _this.loaderService.hide();
            if (e == true) {
                _this.iziToast.success({
                    message: "Imaginea a fost stearsa cu succes!",
                    position: "bottomCenter"
                });
                lodash__WEBPACK_IMPORTED_MODULE_8__["remove"](_this.photos, function (e) { return e.serviceLocationPhotoId == photo.serviceLocationPhotoId; });
            }
            else {
                _this.iziToast.error({
                    message: "A aparut o eroare, va rugam incercati din nou!",
                    position: "bottomCenter"
                });
            }
        });
    };
    LocationImagesComponent.prototype.displayPhoto = function (fileInput) {
        var _this = this;
        if (fileInput.length === 0)
            return;
        var formData = new FormData();
        for (var _i = 0, fileInput_1 = fileInput; _i < fileInput_1.length; _i++) {
            var file = fileInput_1[_i];
            formData.append(file.name, file);
            var fileName = file.name;
        }
        this.imagesService.AddPhotos(formData, this.locationId).subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpEventType"].UploadProgress)
                _this.progress = Math.round(100 * event.loaded / event.total);
            else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpEventType"].Response) {
                _this.loaderService.hide();
                if (event.body.length > 0) {
                    setTimeout(function () {
                        _this.iziToast.success({
                            message: "Au fost adaugate " + event.body.length + "/" + fileInput.length + " imagini!",
                            position: "bottomCenter"
                        });
                        event.body.forEach(function (e) { return _this.photos.unshift(e); });
                    }, 1000 * event.body.length + 3000);
                }
                else {
                    _this.iziToast.error({
                        message: "A aparut o problema la incarcarea pozei, incercati din nou!",
                        position: "bottomCenter"
                    });
                }
            }
        });
    };
    LocationImagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-location-images',
            template: __webpack_require__(/*! raw-loader!./location-images.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin/location-images/location-images.component.html"),
            styles: [__webpack_require__(/*! ./location-images.component.scss */ "./src/app/modules/admin/location-images/location-images.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_core_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
            ng2_izitoast__WEBPACK_IMPORTED_MODULE_4__["Ng2IzitoastService"],
            _location_images_service__WEBPACK_IMPORTED_MODULE_5__["LocationImagesService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], LocationImagesComponent);
    return LocationImagesComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/location-images/location-images.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/admin/location-images/location-images.service.ts ***!
  \**************************************************************************/
/*! exports provided: LocationImagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationImagesService", function() { return LocationImagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LocationImagesService = /** @class */ (function () {
    function LocationImagesService(http) {
        this.http = http;
        this.baseUrl = "/api/LocationPhoto/";
    }
    LocationImagesService.prototype.GetPhotos = function (locationId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("locationId", locationId.toString());
        return this.http.get(this.baseUrl + "GetByLocationId", { params: params });
    };
    LocationImagesService.prototype.SavePhoto = function (contact) {
        return this.http.post(this.baseUrl, contact);
    };
    LocationImagesService.prototype.DeletePhoto = function (contactId) {
        return this.http.delete(this.baseUrl + contactId);
    };
    LocationImagesService.prototype.AddPhotos = function (formData, locationId) {
        var uploadReq = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.baseUrl + locationId, formData, {
            reportProgress: true
        });
        return this.http.request(uploadReq);
    };
    LocationImagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LocationImagesService);
    return LocationImagesService;
}());



/***/ }),

/***/ "./src/app/modules/admin/location-info/loc-info-map/loc-info-map.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/admin/location-info/loc-info-map/loc-info-map.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 65vh;\n  min-height: 400px;\n}\n\nagm-map:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9sb2NhdGlvbi1pbmZvL2xvYy1pbmZvLW1hcC9DOlxcVXNlcnNcXGFuZHJlaS5mdW5hcnVcXERlc2t0b3BcXExpY2VudGFcXGVTZXJ2aWNlXFxlU2VydmljZVxcQ2xpZW50QXBwL3NyY1xcYXBwXFxtb2R1bGVzXFxhZG1pblxcbG9jYXRpb24taW5mb1xcbG9jLWluZm8tbWFwXFxsb2MtaW5mby1tYXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbG9jYXRpb24taW5mby9sb2MtaW5mby1tYXAvbG9jLWluZm8tbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluL2xvY2F0aW9uLWluZm8vbG9jLWluZm8tbWFwL2xvYy1pbmZvLW1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xyXG4gIGhlaWdodDogNjV2aDtcclxuICBtaW4taGVpZ2h0OjQwMHB4O1xyXG59XHJcblxyXG5hZ20tbWFwOmhvdmVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iLCJhZ20tbWFwIHtcbiAgaGVpZ2h0OiA2NXZoO1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbn1cblxuYWdtLW1hcDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/admin/location-info/loc-info-map/loc-info-map.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/admin/location-info/loc-info-map/loc-info-map.component.ts ***!
  \************************************************************************************/
/*! exports provided: LocInfoMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocInfoMapComponent", function() { return LocInfoMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var LocInfoMapComponent = /** @class */ (function () {
    function LocInfoMapComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.zoom = 15;
    }
    LocInfoMapComponent.prototype.ngOnInit = function () {
        this.dialogRef.updateSize("80vw", "80vh");
        this.lat = this.data.latitude;
        this.long = this.data.longitude;
    };
    LocInfoMapComponent.prototype.mapClicked = function (event) {
        this.data.longitude = event.coords.lng;
        this.data.latitude = event.coords.lat;
    };
    LocInfoMapComponent.prototype.CloseDialog = function () {
        this.dialogRef.close();
    };
    LocInfoMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loc-info-map',
            template: __webpack_require__(/*! raw-loader!./loc-info-map.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin/location-info/loc-info-map/loc-info-map.component.html"),
            styles: [__webpack_require__(/*! ./loc-info-map.component.scss */ "./src/app/modules/admin/location-info/loc-info-map/loc-info-map.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], LocInfoMapComponent);
    return LocInfoMapComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/location-info/location-info.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/admin/location-info/location-info.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbG9jYXRpb24taW5mby9sb2NhdGlvbi1pbmZvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/admin/location-info/location-info.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/admin/location-info/location-info.component.ts ***!
  \************************************************************************/
/*! exports provided: LocationInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationInfoComponent", function() { return LocationInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/loader/loader.service */ "./src/app/core/loader/loader.service.ts");
/* harmony import */ var ng2_izitoast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-izitoast */ "./node_modules/ng2-izitoast/ng2-izitoast.es5.js");
/* harmony import */ var _location_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./location-info.service */ "./src/app/modules/admin/location-info/location-info.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _loc_info_map_loc_info_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loc-info-map/loc-info-map.component */ "./src/app/modules/admin/location-info/loc-info-map/loc-info-map.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_models_service_location__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/models/service-location */ "./src/app/core/models/service-location.ts");











var LocationInfoComponent = /** @class */ (function () {
    function LocationInfoComponent(locationService, loaderService, iziToast, dialog, route, router) {
        var _this = this;
        this.locationService = locationService;
        this.loaderService = loaderService;
        this.iziToast = iziToast;
        this.dialog = dialog;
        this.route = route;
        this.router = router;
        this.info = new src_app_core_models_service_location__WEBPACK_IMPORTED_MODULE_10__["ServiceLocation"]();
        this.cityCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.citiesShown = [];
        route.params.subscribe(function (val) {
            _this.id = parseInt(_this.route.snapshot.paramMap.get('id'));
            _this.servInfoId = parseInt(_this.route.snapshot.paramMap.get('infoId'));
            if (_this.id != 0) {
                _this.loaderService.show();
                _this.locationService.GetLocationInfo(_this.id).subscribe(function (e) {
                    _this.loaderService.hide();
                    if (!e) {
                        _this.info = new src_app_core_models_service_location__WEBPACK_IMPORTED_MODULE_10__["ServiceLocation"]();
                    }
                    else {
                        _this.info = e;
                    }
                });
            }
            else {
                _this.info = new src_app_core_models_service_location__WEBPACK_IMPORTED_MODULE_10__["ServiceLocation"]();
                _this.cityCtrl.setValue(null);
            }
        });
    }
    LocationInfoComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.cities) {
            this.filteredCities = this.cityCtrl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (query) { return query && query.length > 2; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (state) { return state ? _this._filterStates(state) : _this.cities.slice(); }));
        }
    };
    LocationInfoComponent.prototype._filterStates = function (value) {
        var filterValue = value.toLowerCase();
        return this.cities.filter(function (state) { return state.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    LocationInfoComponent.prototype.ngOnInit = function () {
        //if (this.id != 0) {
        //  this.loaderService.show();
        //  this.locationService.GetLocationInfo(this.id).subscribe(e => {
        //    this.loaderService.hide();
        //    if (!e) {
        //      this.info = new ServiceLocation();
        //    } else {
        //      this.info = e;
        //    }
        //  });
        //} else {
        //  this.info = new ServiceLocation();
        //}
    };
    LocationInfoComponent.prototype.CitySelected = function (item) {
        this.info.latitude = item.latitude;
        this.info.longitude = item.longitude;
    };
    LocationInfoComponent.prototype.displayFn = function (city) {
        return city ? city.name : null;
    };
    LocationInfoComponent.prototype.SelectLocationCoords = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_loc_info_map_loc_info_map_component__WEBPACK_IMPORTED_MODULE_7__["LocInfoMapComponent"], {
            data: {
                latitude: this.info.latitude ? this.info.latitude : 45.9442858,
                longitude: this.info.longitude ? this.info.longitude : 25.0094303,
                name: this.info.name
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != undefined) {
                _this.info.longitude = result.longitude;
                _this.info.latitude = result.latitude;
            }
        });
    };
    LocationInfoComponent.prototype.SaveData = function () {
        var _this = this;
        this.loaderService.show();
        if (this.id == 0) {
            var inf = this.info;
            inf.cityId = inf.city.cityId;
            inf.city = null;
            this.locationService.AddLocationInfo(inf, this.servInfoId).subscribe(function (e) {
                _this.loaderService.hide();
                if (e == 0) {
                    _this.iziToast.error({
                        message: "A aparut o eroare, va rugam incercati din nou!",
                        position: "bottomCenter"
                    });
                }
                else {
                    _this.iziToast.success({
                        message: "Modificarile au fost efectuate cu succes!",
                        position: "bottomCenter"
                    });
                    _this.router.navigate(['/admin', 'location', _this.servInfoId, e]);
                }
            });
        }
        else {
            this.locationService.EditLocationInfo(this.info, this.id).subscribe(function (e) {
                _this.loaderService.hide();
                if (e == true) {
                    _this.iziToast.success({
                        message: "Modificarile au fost efectuate cu succes!",
                        position: "bottomCenter"
                    });
                }
                else {
                    _this.iziToast.error({
                        message: "A aparut o eroare, va rugam incercati din nou!",
                        position: "bottomCenter"
                    });
                }
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("cities"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], LocationInfoComponent.prototype, "cities", void 0);
    LocationInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-location-info',
            template: __webpack_require__(/*! raw-loader!./location-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin/location-info/location-info.component.html"),
            styles: [__webpack_require__(/*! ./location-info.component.scss */ "./src/app/modules/admin/location-info/location-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_location_info_service__WEBPACK_IMPORTED_MODULE_4__["LocationInfoService"],
            src_app_core_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"],
            ng2_izitoast__WEBPACK_IMPORTED_MODULE_3__["Ng2IzitoastService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], LocationInfoComponent);
    return LocationInfoComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/location-info/location-info.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/admin/location-info/location-info.service.ts ***!
  \**********************************************************************/
/*! exports provided: LocationInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationInfoService", function() { return LocationInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LocationInfoService = /** @class */ (function () {
    function LocationInfoService(http) {
        this.http = http;
        this.baseUrl = "/api/LocationInfo/";
    }
    LocationInfoService.prototype.GetLocationInfo = function (id) {
        // let params = new HttpParams().set("id", id.toString());
        return this.http.get(this.baseUrl + id);
    };
    LocationInfoService.prototype.AddLocationInfo = function (info, serviceInfoId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("serviceInfoId", serviceInfoId.toString());
        return this.http.post(this.baseUrl, info, { params: params });
    };
    LocationInfoService.prototype.EditLocationInfo = function (info, id) {
        return this.http.put(this.baseUrl + id, info);
    };
    LocationInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LocationInfoService);
    return LocationInfoService;
}());



/***/ }),

/***/ "./src/app/modules/admin/location-manufacturers/location-manufacturers.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/admin/location-manufacturers/location-manufacturers.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".car-logo {\n  max-height: 25px;\n  max-width: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9sb2NhdGlvbi1tYW51ZmFjdHVyZXJzL0M6XFxVc2Vyc1xcYW5kcmVpLmZ1bmFydVxcRGVza3RvcFxcTGljZW50YVxcZVNlcnZpY2VcXGVTZXJ2aWNlXFxDbGllbnRBcHAvc3JjXFxhcHBcXG1vZHVsZXNcXGFkbWluXFxsb2NhdGlvbi1tYW51ZmFjdHVyZXJzXFxsb2NhdGlvbi1tYW51ZmFjdHVyZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL2xvY2F0aW9uLW1hbnVmYWN0dXJlcnMvbG9jYXRpb24tbWFudWZhY3R1cmVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGdCQUFBO0VBQ0EsZUFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbi9sb2NhdGlvbi1tYW51ZmFjdHVyZXJzL2xvY2F0aW9uLW1hbnVmYWN0dXJlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyLWxvZ29cclxue1xyXG4gIG1heC1oZWlnaHQ6MjVweDtcclxuICBtYXgtd2lkdGg6MjVweDtcclxuICBcclxufVxyXG4iLCIuY2FyLWxvZ28ge1xuICBtYXgtaGVpZ2h0OiAyNXB4O1xuICBtYXgtd2lkdGg6IDI1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/admin/location-manufacturers/location-manufacturers.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/admin/location-manufacturers/location-manufacturers.component.ts ***!
  \******************************************************************************************/
/*! exports provided: LocationManufacturersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationManufacturersComponent", function() { return LocationManufacturersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/loader/loader.service */ "./src/app/core/loader/loader.service.ts");
/* harmony import */ var ng2_izitoast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-izitoast */ "./node_modules/ng2-izitoast/ng2-izitoast.es5.js");
/* harmony import */ var _location_manufacturers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./location-manufacturers.service */ "./src/app/modules/admin/location-manufacturers/location-manufacturers.service.ts");







var ShownMan = /** @class */ (function () {
    function ShownMan() {
    }
    return ShownMan;
}());
var LocationManufacturersComponent = /** @class */ (function () {
    function LocationManufacturersComponent(route, loaderService, iziToast, manufacturersService, dialog) {
        var _this = this;
        this.route = route;
        this.loaderService = loaderService;
        this.iziToast = iziToast;
        this.manufacturersService = manufacturersService;
        this.dialog = dialog;
        this.firstTime = true;
        this.displayedColumns = ['icon', 'name', 'id'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.shownManufacturers);
        this.hasBrands = false;
        route.params.subscribe(function (val) {
            _this.locationId = parseInt(_this.route.snapshot.paramMap.get('id'));
            _this.servInfoId = parseInt(_this.route.snapshot.paramMap.get('infoId'));
            if (!_this.firstTime) {
                _this.GetManufactures(_this.locationId);
            }
        });
    }
    LocationManufacturersComponent.prototype.ngOnInit = function () {
    };
    LocationManufacturersComponent.prototype.ngOnChanges = function () {
        if (this.brands) {
            this.hasBrands = true;
            this.firstTime = false;
            this.GetManufactures(this.locationId);
        }
    };
    LocationManufacturersComponent.prototype.GetManufactures = function (locationId) {
        var _this = this;
        this.loaderService.show();
        this.locationManufacturers = [];
        this.manufacturersService.GetManufacturers(locationId).subscribe(function (e) {
            _this.loaderService.hide();
            _this.locationManufacturers = e;
            _this.shownManufacturers = [];
            _this.brands.forEach(function (e) {
                _this.shownManufacturers.push({
                    id: _this.locationManufacturers.filter(function (z) { return z.carManufacturerId == e.carManufacturerId; }).length > 0 ?
                        _this.locationManufacturers.filter(function (z) { return z.carManufacturerId == e.carManufacturerId; })[0].serviceManufacturerId : 0,
                    name: e.name,
                    icon: e.icon,
                    carManufacturerId: e.carManufacturerId
                });
            });
            _this.SetDataSource();
        });
    };
    LocationManufacturersComponent.prototype.SetDataSource = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.shownManufacturers);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    LocationManufacturersComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    LocationManufacturersComponent.prototype.AddManufacturer = function (element) {
        var _this = this;
        this.loaderService.show();
        var fac = { carManufacturerId: element.carManufacturerId, serviceLocationId: this.locationId };
        this.manufacturersService.SaveManufacturer(fac).subscribe(function (e) {
            _this.loaderService.hide();
            if (e == 0) {
                _this.iziToast.error({
                    message: "A aparut o eroare, incercati din nou!",
                    position: "bottomCenter"
                });
            }
            else {
                _this.locationManufacturers.unshift({ serviceLocationId: _this.locationId, carManufacturerId: element.carManufacturerId, serviceManufacturerId: e });
                element.id = e;
                _this.iziToast.success({
                    message: "Brand-ul selectat a fost adaugat cu succes!",
                    position: "bottomCenter"
                });
            }
        });
    };
    LocationManufacturersComponent.prototype.DeleteManufacturer = function (element) {
        var _this = this;
        this.loaderService.show();
        this.manufacturersService.DeleteManufacturer(element.id).subscribe(function (response) {
            _this.loaderService.hide();
            if (response == false) {
                _this.iziToast.error({
                    message: "A aparut o eroare, incercati din nou!",
                    position: "bottomCenter"
                });
            }
            else {
                element.id = 0;
                _this.iziToast.success({
                    message: "Brand-ul selectat a fost sters cu succes!",
                    position: "bottomCenter"
                });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], LocationManufacturersComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], LocationManufacturersComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('brands'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], LocationManufacturersComponent.prototype, "brands", void 0);
    LocationManufacturersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-location-manufacturers',
            template: __webpack_require__(/*! raw-loader!./location-manufacturers.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin/location-manufacturers/location-manufacturers.component.html"),
            styles: [__webpack_require__(/*! ./location-manufacturers.component.scss */ "./src/app/modules/admin/location-manufacturers/location-manufacturers.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_core_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            ng2_izitoast__WEBPACK_IMPORTED_MODULE_5__["Ng2IzitoastService"],
            _location_manufacturers_service__WEBPACK_IMPORTED_MODULE_6__["LocationManufacturersService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], LocationManufacturersComponent);
    return LocationManufacturersComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/location-manufacturers/location-manufacturers.service.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/admin/location-manufacturers/location-manufacturers.service.ts ***!
  \****************************************************************************************/
/*! exports provided: LocationManufacturersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationManufacturersService", function() { return LocationManufacturersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LocationManufacturersService = /** @class */ (function () {
    function LocationManufacturersService(http) {
        this.http = http;
        this.baseUrl = "/api/ServiceManufacturer/";
    }
    LocationManufacturersService.prototype.GetManufacturers = function (locationId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("locationId", locationId.toString());
        return this.http.get(this.baseUrl + "GetByLocationId", { params: params });
    };
    LocationManufacturersService.prototype.SaveManufacturer = function (contact) {
        return this.http.post(this.baseUrl, contact);
    };
    LocationManufacturersService.prototype.DeleteManufacturer = function (contactId) {
        return this.http.delete(this.baseUrl + contactId);
    };
    LocationManufacturersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LocationManufacturersService);
    return LocationManufacturersService;
}());



/***/ }),

/***/ "./src/app/modules/admin/location-operations/add-location-operation/add-location-operation.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/admin/location-operations/add-location-operation/add-location-operation.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbG9jYXRpb24tb3BlcmF0aW9ucy9hZGQtbG9jYXRpb24tb3BlcmF0aW9uL2FkZC1sb2NhdGlvbi1vcGVyYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/admin/location-operations/add-location-operation/add-location-operation.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/admin/location-operations/add-location-operation/add-location-operation.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: AddLocationOperationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLocationOperationComponent", function() { return AddLocationOperationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_core_models_service_location_operation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/models/service-location-operation */ "./src/app/core/models/service-location-operation.ts");






var AddLocationOperationComponent = /** @class */ (function () {
    function AddLocationOperationComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.typeOpControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.opControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.shownOp = [];
    }
    AddLocationOperationComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.data.item == null || this.data.item == undefined) {
            this.data.item = new src_app_core_models_service_location_operation__WEBPACK_IMPORTED_MODULE_5__["ServiceLocationOperation"]();
            this.selectedOpType = this.data.opTypes[0];
            this.shownOp = this.data.op.filter(function (e) { return e.serviceOperationType.serviceOperationTypeId == _this.selectedOpType.serviceOperationTypeId; });
        }
        else {
            this.selectedOp = this.data.op.filter(function (e) { return e.serviceOperationId == _this.data.item.serviceOperationId; })[0];
            this.selectedOpType = this.data.op.filter(function (e) { return e.serviceOperationId == _this.data.item.serviceOperationId; })[0].serviceOperationType;
        }
        this.filteredOptionsOpType = this.typeOpControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) { return typeof value === 'string' ? value : value.name; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (name) { return name ? _this._filter(name) : _this.data.opTypes.slice(); }));
        this.filteredOptionsOp = this.opControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) { return typeof value === 'string' ? value : value.name; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (name) { return name ? _this._filterOp(name) : _this.shownOp.slice(); }));
    };
    AddLocationOperationComponent.prototype.OnTypeSelected = function (event) {
        this.shownOp = this.data.op.filter(function (e) { return e.serviceOperationType.serviceOperationTypeId == event.serviceOperationTypeId; });
        this.data.item.serviceOperationId = null;
        this.opControl.setValue("");
        this.selectedOp = null;
    };
    AddLocationOperationComponent.prototype.OnOperationSelected = function (event) {
        this.data.item.serviceOperationId = event.serviceOperationId;
    };
    AddLocationOperationComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddLocationOperationComponent.prototype._filter = function (name) {
        var filterValue = name.toLowerCase();
        return this.data.opTypes.filter(function (option) { return option.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    AddLocationOperationComponent.prototype._filterOp = function (name) {
        var filterValue = name.toLowerCase();
        return this.shownOp.filter(function (option) { return option.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    AddLocationOperationComponent.prototype.displayFnType = function (item) {
        return item.name;
    };
    AddLocationOperationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-location-operation',
            template: __webpack_require__(/*! raw-loader!./add-location-operation.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin/location-operations/add-location-operation/add-location-operation.component.html"),
            styles: [__webpack_require__(/*! ./add-location-operation.component.scss */ "./src/app/modules/admin/location-operations/add-location-operation/add-location-operation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], AddLocationOperationComponent);
    return AddLocationOperationComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/location-operations/delete-location-operation/delete-location-operation.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/admin/location-operations/delete-location-operation/delete-location-operation.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbG9jYXRpb24tb3BlcmF0aW9ucy9kZWxldGUtbG9jYXRpb24tb3BlcmF0aW9uL2RlbGV0ZS1sb2NhdGlvbi1vcGVyYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/admin/location-operations/delete-location-operation/delete-location-operation.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/admin/location-operations/delete-location-operation/delete-location-operation.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: DeleteLocationOperationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteLocationOperationComponent", function() { return DeleteLocationOperationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var DeleteLocationOperationComponent = /** @class */ (function () {
    function DeleteLocationOperationComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DeleteLocationOperationComponent.prototype.ngOnInit = function () {
    };
    DeleteLocationOperationComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DeleteLocationOperationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-location-operation',
            template: __webpack_require__(/*! raw-loader!./delete-location-operation.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin/location-operations/delete-location-operation/delete-location-operation.component.html"),
            styles: [__webpack_require__(/*! ./delete-location-operation.component.scss */ "./src/app/modules/admin/location-operations/delete-location-operation/delete-location-operation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], DeleteLocationOperationComponent);
    return DeleteLocationOperationComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/location-operations/location-operations.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/admin/location-operations/location-operations.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".operation-image {\n  max-height: 25px;\n  max-width: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9sb2NhdGlvbi1vcGVyYXRpb25zL0M6XFxVc2Vyc1xcYW5kcmVpLmZ1bmFydVxcRGVza3RvcFxcTGljZW50YVxcZVNlcnZpY2VcXGVTZXJ2aWNlXFxDbGllbnRBcHAvc3JjXFxhcHBcXG1vZHVsZXNcXGFkbWluXFxsb2NhdGlvbi1vcGVyYXRpb25zXFxsb2NhdGlvbi1vcGVyYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL2xvY2F0aW9uLW9wZXJhdGlvbnMvbG9jYXRpb24tb3BlcmF0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbi9sb2NhdGlvbi1vcGVyYXRpb25zL2xvY2F0aW9uLW9wZXJhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3BlcmF0aW9uLWltYWdlIHtcclxuICBtYXgtaGVpZ2h0OiAyNXB4O1xyXG4gIG1heC13aWR0aDogMjVweDtcclxufVxyXG4iLCIub3BlcmF0aW9uLWltYWdlIHtcbiAgbWF4LWhlaWdodDogMjVweDtcbiAgbWF4LXdpZHRoOiAyNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/admin/location-operations/location-operations.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/admin/location-operations/location-operations.component.ts ***!
  \************************************************************************************/
/*! exports provided: LocationOperationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationOperationsComponent", function() { return LocationOperationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _location_operations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location-operations.service */ "./src/app/modules/admin/location-operations/location-operations.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/loader/loader.service */ "./src/app/core/loader/loader.service.ts");
/* harmony import */ var ng2_izitoast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-izitoast */ "./node_modules/ng2-izitoast/ng2-izitoast.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _add_location_operation_add_location_operation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-location-operation/add-location-operation.component */ "./src/app/modules/admin/location-operations/add-location-operation/add-location-operation.component.ts");
/* harmony import */ var _delete_location_operation_delete_location_operation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./delete-location-operation/delete-location-operation.component */ "./src/app/modules/admin/location-operations/delete-location-operation/delete-location-operation.component.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);










var ShownOperation = /** @class */ (function () {
    function ShownOperation() {
    }
    return ShownOperation;
}());
var LocationOperationsComponent = /** @class */ (function () {
    function LocationOperationsComponent(route, loaderService, iziToast, operationService, dialog) {
        var _this = this;
        this.route = route;
        this.loaderService = loaderService;
        this.iziToast = iziToast;
        this.operationService = operationService;
        this.dialog = dialog;
        this.firstTime = true;
        this.displayedColumns = ['typeOp', 'op', 'time', 'price', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.shownOperation);
        this.hasLoaded = false;
        route.params.subscribe(function (val) {
            _this.locationId = parseInt(_this.route.snapshot.paramMap.get('id'));
            _this.servInfoId = parseInt(_this.route.snapshot.paramMap.get('infoId'));
            if (!_this.firstTime) {
                _this.GetOperations(_this.locationId);
            }
        });
    }
    LocationOperationsComponent.prototype.ngOnChanges = function () {
        if (this.op && this.opTypes) {
            this.hasLoaded = true;
            this.firstTime = false;
            this.GetOperations(this.locationId);
        }
    };
    LocationOperationsComponent.prototype.ngOnInit = function () {
    };
    LocationOperationsComponent.prototype.GetOperations = function (locationId) {
        var _this = this;
        this.loaderService.show();
        this.locationOperations = [];
        this.operationService.GetOperations(locationId).subscribe(function (e) {
            _this.loaderService.hide();
            _this.locationOperations = e;
            _this.shownOperation = [];
            _this.locationOperations.forEach(function (z) {
                var opp = _this.op.filter(function (m) { return m.serviceOperationId == z.serviceOperationId; })[0];
                _this.shownOperation.unshift({
                    item: z,
                    operation: opp
                });
            });
            _this.SetDataSource();
        });
    };
    LocationOperationsComponent.prototype.SetDataSource = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.shownOperation);
        this.dataSource.sort = this.sort;
    };
    LocationOperationsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    LocationOperationsComponent.prototype.AddOperation = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_add_location_operation_add_location_operation_component__WEBPACK_IMPORTED_MODULE_7__["AddLocationOperationComponent"], {
            width: '350px',
            data: {
                type: 'add',
                opTypes: this.opTypes,
                op: this.op.filter(function (e) { return _this.locationOperations.map(function (z) { return z.serviceOperationId; }).indexOf(e.serviceOperationId) == -1; }),
                item: null
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != undefined && result != null) {
                if (!result.item.serviceOperationId) {
                    _this.iziToast.warning({
                        message: "Selecteaza un serviciu pentru a putea adauga!",
                        position: "bottomCenter"
                    });
                    return;
                }
                if (!result.item.price) {
                    _this.iziToast.warning({
                        message: "Completeaza un pret pentru a putea adauga!",
                        position: "bottomCenter"
                    });
                    return;
                }
                if (result.item.price <= 0) {
                    _this.iziToast.warning({
                        message: "Pretul trebuie sa fie pozitiv pentru a putea adauga!",
                        position: "bottomCenter"
                    });
                    return;
                }
                if (!result.item.time) {
                    _this.iziToast.warning({
                        message: "Completeaza timpul necesar serviciului pentru a putea adauga!",
                        position: "bottomCenter"
                    });
                    return;
                }
                if (result.item.time <= 0) {
                    _this.iziToast.warning({
                        message: "Timpul trebuie sa fie pozitiv pentru a putea adauga!",
                        position: "bottomCenter"
                    });
                    return;
                }
                _this.loaderService.show();
                result.item.serviceLocationId = _this.locationId;
                _this.operationService.SaveOperation(result.item).subscribe(function (response) {
                    _this.loaderService.hide();
                    if (response == 0) {
                        _this.iziToast.error({
                            message: "A aparut o eroare, va rugam incercati din nou!",
                            position: "bottomCenter"
                        });
                    }
                    else {
                        _this.iziToast.success({
                            message: "Serviciul a fost adaugat cu succes!",
                            position: "bottomCenter"
                        });
                        var item_1 = {
                            serviceLocationOperationId: response,
                            serviceLocationId: _this.locationId,
                            serviceOperationId: result.item.serviceOperationId,
                            price: result.item.price,
                            time: result.item.time
                        };
                        _this.locationOperations.unshift(item_1);
                        _this.shownOperation.unshift({
                            item: item_1,
                            operation: _this.op.filter(function (z) { return z.serviceOperationId == item_1.serviceOperationId; })[0]
                        });
                        _this.SetDataSource();
                    }
                });
            }
        });
    };
    LocationOperationsComponent.prototype.EditOperation = function (element) {
        var _this = this;
        var dialogRef = this.dialog.open(_add_location_operation_add_location_operation_component__WEBPACK_IMPORTED_MODULE_7__["AddLocationOperationComponent"], {
            width: '350px',
            data: {
                type: 'edit',
                opTypes: this.opTypes,
                op: this.op,
                item: Object.assign({}, element.item)
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != undefined && result != null) {
                if (!result.item.price) {
                    _this.iziToast.warning({
                        message: "Completeaza un pret pentru a putea edita!",
                        position: "bottomCenter"
                    });
                    return;
                }
                if (result.item.price <= 0) {
                    _this.iziToast.warning({
                        message: "Pretul trebuie sa fie pozitiv pentru a putea edita!",
                        position: "bottomCenter"
                    });
                    return;
                }
                if (!result.item.time) {
                    _this.iziToast.warning({
                        message: "Completeaza timpul necesar serviciului pentru a putea edita!",
                        position: "bottomCenter"
                    });
                    return;
                }
                if (result.item.time <= 0) {
                    _this.iziToast.warning({
                        message: "Timpul trebuie sa fie pozitiv pentru a putea edita!",
                        position: "bottomCenter"
                    });
                    return;
                }
                _this.loaderService.show();
                _this.operationService.EditOperation(result.item, element.item.serviceLocationOperationId).subscribe(function (response) {
                    _this.loaderService.hide();
                    if (response == false) {
                        _this.iziToast.error({
                            message: "A aparut o eroare, va rugam incercati din nou!",
                            position: "bottomCenter"
                        });
                    }
                    else {
                        _this.iziToast.success({
                            message: "Modificarea a fost efectuata cu succes!",
                            position: "bottomCenter"
                        });
                        element.item.price = result.item.price;
                        element.item.time = result.item.time;
                    }
                });
            }
        });
    };
    LocationOperationsComponent.prototype.DeleteOperation = function (item) {
        var _this = this;
        var dialogRef = this.dialog.open(_delete_location_operation_delete_location_operation_component__WEBPACK_IMPORTED_MODULE_8__["DeleteLocationOperationComponent"], {
            width: '250px',
            data: {
                item: item.item,
                op: item.operation
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result != undefined) {
                _this.loaderService.show();
                _this.operationService.DeleteOperation(item.item.serviceLocationOperationId).subscribe(function (response) {
                    _this.loaderService.hide();
                    if (response == false) {
                        _this.iziToast.error({
                            message: "A aparut o eroare, incercati din nou!",
                            position: "bottomCenter"
                        });
                    }
                    else {
                        lodash__WEBPACK_IMPORTED_MODULE_9__["remove"](_this.locationOperations, function (e) { return e.serviceLocationOperationId == item.item.serviceLocationOperationId; });
                        lodash__WEBPACK_IMPORTED_MODULE_9__["remove"](_this.shownOperation, function (e) { return e.item.serviceLocationOperationId == item.item.serviceLocationOperationId; });
                        _this.SetDataSource();
                    }
                }, function (error) {
                    _this.iziToast.error({
                        message: "A aparut o eroare, incercati din nou!",
                        position: "bottomCenter"
                    });
                });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"])
    ], LocationOperationsComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"])
    ], LocationOperationsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('op'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], LocationOperationsComponent.prototype, "op", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('opTypes'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], LocationOperationsComponent.prototype, "opTypes", void 0);
    LocationOperationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-location-operations',
            template: __webpack_require__(/*! raw-loader!./location-operations.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin/location-operations/location-operations.component.html"),
            styles: [__webpack_require__(/*! ./location-operations.component.scss */ "./src/app/modules/admin/location-operations/location-operations.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_core_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            ng2_izitoast__WEBPACK_IMPORTED_MODULE_5__["Ng2IzitoastService"],
            _location_operations_service__WEBPACK_IMPORTED_MODULE_2__["LocationOperationsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], LocationOperationsComponent);
    return LocationOperationsComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/location-operations/location-operations.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/admin/location-operations/location-operations.service.ts ***!
  \**********************************************************************************/
/*! exports provided: LocationOperationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationOperationsService", function() { return LocationOperationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LocationOperationsService = /** @class */ (function () {
    function LocationOperationsService(http) {
        this.http = http;
        this.baseUrl = "/api/LocationOperation/";
    }
    LocationOperationsService.prototype.GetOperations = function (locationId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("locationId", locationId.toString());
        return this.http.get(this.baseUrl + "GetByLocationId", { params: params });
    };
    LocationOperationsService.prototype.SaveOperation = function (entity) {
        return this.http.post(this.baseUrl, entity);
    };
    LocationOperationsService.prototype.DeleteOperation = function (id) {
        return this.http.delete(this.baseUrl + id);
    };
    LocationOperationsService.prototype.EditOperation = function (info, id) {
        return this.http.put(this.baseUrl + id, info);
    };
    LocationOperationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LocationOperationsService);
    return LocationOperationsService;
}());



/***/ }),

/***/ "./src/app/modules/admin/location-program/location-program.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/admin/location-program/location-program.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbG9jYXRpb24tcHJvZ3JhbS9sb2NhdGlvbi1wcm9ncmFtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/admin/location-program/location-program.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/admin/location-program/location-program.component.ts ***!
  \******************************************************************************/
/*! exports provided: LocationProgramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationProgramComponent", function() { return LocationProgramComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _location_program_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location-program.service */ "./src/app/modules/admin/location-program/location-program.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/loader/loader.service */ "./src/app/core/loader/loader.service.ts");
/* harmony import */ var ng2_izitoast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-izitoast */ "./node_modules/ng2-izitoast/ng2-izitoast.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var Day = /** @class */ (function () {
    function Day() {
    }
    return Day;
}());
var ShownProgram = /** @class */ (function () {
    function ShownProgram() {
    }
    return ShownProgram;
}());
var LocationProgramComponent = /** @class */ (function () {
    function LocationProgramComponent(route, loaderService, iziToast, programService, dialog) {
        var _this = this;
        this.route = route;
        this.loaderService = loaderService;
        this.iziToast = iziToast;
        this.programService = programService;
        this.dialog = dialog;
        this.days = [
            {
                dayId: 1,
                dayName: "Luni"
            },
            {
                dayId: 2,
                dayName: "Marti"
            },
            {
                dayId: 3,
                dayName: "Miercuri"
            },
            {
                dayId: 4,
                dayName: "Joi"
            },
            {
                dayId: 5,
                dayName: "Vineri"
            },
            {
                dayId: 6,
                dayName: "Sambata"
            },
            {
                dayId: 7,
                dayName: "Duminica"
            }
        ];
        this.editItemBack = {};
        this.displayedColumns = ['dayName', 'open', 'close', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.shownProgram);
        route.params.subscribe(function (val) {
            _this.locationId = parseInt(_this.route.snapshot.paramMap.get('id'));
            _this.servInfoId = parseInt(_this.route.snapshot.paramMap.get('infoId'));
            _this.GetProgram(_this.locationId);
        });
    }
    LocationProgramComponent.prototype.ngOnInit = function () {
    };
    LocationProgramComponent.prototype.GetProgram = function (item) {
        var _this = this;
        this.loaderService.show();
        this.locationProgram = [];
        this.programService.GetProgram(item).subscribe(function (e) {
            _this.loaderService.hide();
            _this.locationProgram = e;
            _this.shownProgram = [];
            _this.days.forEach(function (z) {
                var it = _this.locationProgram.filter(function (m) { return m.weekDay == z.dayId; })[0];
                if (it) {
                    _this.shownProgram.push({
                        dayId: z.dayId,
                        dayName: z.dayName,
                        locProgId: it.serviceProgramId,
                        open: it.openHour + ":" + it.openMinute,
                        close: it.closeHour + ":" + it.closeMinute
                    });
                }
                else {
                    _this.shownProgram.push({
                        dayId: z.dayId,
                        dayName: z.dayName,
                        open: "",
                        close: "",
                        locProgId: 0
                    });
                }
            });
            _this.SetDataSource();
        });
    };
    LocationProgramComponent.prototype.SetDataSource = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.shownProgram);
        this.dataSource.sort = this.sort;
    };
    LocationProgramComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    LocationProgramComponent.prototype.AddProgram = function (element) {
        this.editItem = element;
    };
    LocationProgramComponent.prototype.EditProgram = function (element) {
        this.editItem = element;
    };
    LocationProgramComponent.prototype.SelectEdit = function (element) {
        this.editItem = element;
        Object.assign(this.editItemBack, element);
    };
    LocationProgramComponent.prototype.CloseEdit = function (element) {
        this.editItem = null;
    };
    LocationProgramComponent.prototype.ConfirmAddEdit = function (element) {
        if (this.editItem.locProgId == 0) {
            this.ConfirmAdd(element);
        }
        else {
            this.ConfirmEdit(element);
        }
    };
    LocationProgramComponent.prototype.ConfirmEdit = function (element) {
        var _this = this;
        this.loaderService.show();
        var elem = {
            weekDay: element.dayId,
            openHour: parseInt(this.editItem.open.split(":")[0]),
            openMinute: parseInt(this.editItem.open.split(":")[1]),
            closeHour: parseInt(this.editItem.close.split(":")[0]),
            closeMinute: parseInt(this.editItem.close.split(":")[1]),
            serviceProgramId: element.locProgId,
            serviceLocationId: this.locationId
        };
        this.programService.EditProgram(elem, element.locProgId).subscribe(function (e) {
            _this.loaderService.hide();
            if (e == false) {
                _this.iziToast.error({
                    message: "A aparut o eroare, incercati din nou!",
                    position: "bottomCenter"
                });
            }
            else {
                _this.iziToast.success({
                    message: "Programul pentru ziua selectata a fost adaugat cu succes!",
                    position: "bottomCenter"
                });
                element.open = _this.editItem.open;
                element.close = _this.editItem.close;
                var x = _this.locationProgram.filter(function (z) { return z.serviceProgramId == element.locProgId; })[0];
                x.openHour = elem.openHour;
                x.openMinute = elem.openMinute;
                x.closeHour = elem.closeHour;
                x.closeMinute = elem.closeMinute;
                _this.editItem = null;
            }
        });
    };
    LocationProgramComponent.prototype.ConfirmAdd = function (element) {
        var _this = this;
        this.loaderService.show();
        var elem = {
            weekDay: element.dayId,
            openHour: parseInt(this.editItem.open.split(":")[0]),
            openMinute: parseInt(this.editItem.open.split(":")[1]),
            closeHour: parseInt(this.editItem.close.split(":")[0]),
            closeMinute: parseInt(this.editItem.close.split(":")[1]),
            serviceProgramId: 0,
            serviceLocationId: this.locationId
        };
        this.programService.SaveProgram(elem).subscribe(function (e) {
            _this.loaderService.hide();
            if (e == 0) {
                _this.iziToast.error({
                    message: "A aparut o eroare, incercati din nou!",
                    position: "bottomCenter"
                });
            }
            else {
                _this.iziToast.success({
                    message: "Programul pentru ziua selectata a fost adaugat cu succes!",
                    position: "bottomCenter"
                });
                element.open = _this.editItem.open;
                element.close = _this.editItem.close;
                element.locProgId = e;
                elem.serviceProgramId = e;
                _this.locationProgram.unshift(elem);
                _this.editItem = null;
            }
        });
    };
    LocationProgramComponent.prototype.Console = function (item) {
        console.log(item);
    };
    LocationProgramComponent.prototype.GetValue = function (element) {
        return element.open;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"])
    ], LocationProgramComponent.prototype, "sort", void 0);
    LocationProgramComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-location-program',
            template: __webpack_require__(/*! raw-loader!./location-program.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin/location-program/location-program.component.html"),
            styles: [__webpack_require__(/*! ./location-program.component.scss */ "./src/app/modules/admin/location-program/location-program.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_core_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            ng2_izitoast__WEBPACK_IMPORTED_MODULE_5__["Ng2IzitoastService"],
            _location_program_service__WEBPACK_IMPORTED_MODULE_2__["LocationProgramService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], LocationProgramComponent);
    return LocationProgramComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/location-program/location-program.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/admin/location-program/location-program.service.ts ***!
  \****************************************************************************/
/*! exports provided: LocationProgramService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationProgramService", function() { return LocationProgramService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LocationProgramService = /** @class */ (function () {
    function LocationProgramService(http) {
        this.http = http;
        this.baseUrl = "/api/LocationProgram/";
    }
    LocationProgramService.prototype.GetProgram = function (locationId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("locationId", locationId.toString());
        return this.http.get(this.baseUrl + "GetByLocationId", { params: params });
    };
    LocationProgramService.prototype.SaveProgram = function (entity) {
        return this.http.post(this.baseUrl, entity);
    };
    LocationProgramService.prototype.DeleteProgram = function (id) {
        return this.http.delete(this.baseUrl + id);
    };
    LocationProgramService.prototype.EditProgram = function (info, id) {
        return this.http.put(this.baseUrl + id, info);
    };
    LocationProgramService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LocationProgramService);
    return LocationProgramService;
}());



/***/ }),

/***/ "./src/app/modules/admin/location-promotions/location-promotions.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/admin/location-promotions/location-promotions.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbG9jYXRpb24tcHJvbW90aW9ucy9sb2NhdGlvbi1wcm9tb3Rpb25zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/admin/location-promotions/location-promotions.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/admin/location-promotions/location-promotions.component.ts ***!
  \************************************************************************************/
/*! exports provided: LocationPromotionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPromotionsComponent", function() { return LocationPromotionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LocationPromotionsComponent = /** @class */ (function () {
    function LocationPromotionsComponent() {
    }
    LocationPromotionsComponent.prototype.ngOnInit = function () {
    };
    LocationPromotionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-location-promotions',
            template: __webpack_require__(/*! raw-loader!./location-promotions.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin/location-promotions/location-promotions.component.html"),
            styles: [__webpack_require__(/*! ./location-promotions.component.scss */ "./src/app/modules/admin/location-promotions/location-promotions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LocationPromotionsComponent);
    return LocationPromotionsComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/serivce-location-layout/data.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/admin/serivce-location-layout/data.service.ts ***!
  \***********************************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/modules/admin/serivce-location-layout/serivce-location-layout.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/admin/serivce-location-layout/serivce-location-layout.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toc-container {\n  border-left: 2px solid #3f51b5;\n  position: fixed;\n  top: 100px;\n  /* Sets the sticky toolbar to be on top */\n  z-index: 1000;\n  /* Ensure that your app's content doesn't overlap the toolbar */\n}\n.toc-container .mat-list-item-content {\n  padding-top: 0;\n}\n.toc-container mat-list-item div:first-child {\n  padding-top: 0;\n}\n.toc-container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9zZXJpdmNlLWxvY2F0aW9uLWxheW91dC9DOlxcVXNlcnNcXGFuZHJlaS5mdW5hcnVcXERlc2t0b3BcXExpY2VudGFcXGVTZXJ2aWNlXFxlU2VydmljZVxcQ2xpZW50QXBwL3NyY1xcYXBwXFxtb2R1bGVzXFxhZG1pblxcc2VyaXZjZS1sb2NhdGlvbi1sYXlvdXRcXHNlcml2Y2UtbG9jYXRpb24tbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL3Nlcml2Y2UtbG9jYXRpb24tbGF5b3V0L3Nlcml2Y2UtbG9jYXRpb24tbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUFZLHlDQUFBO0VBQ1osYUFBQTtFQUFlLCtEQUFBO0FDR2pCO0FERkU7RUFDRSxjQUFBO0FDSUo7QURERTtFQUNFLGNBQUE7QUNHSjtBREdBO0VBQ0UscUJBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vc2VyaXZjZS1sb2NhdGlvbi1sYXlvdXQvc2VyaXZjZS1sb2NhdGlvbi1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9jLWNvbnRhaW5lciB7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjM2Y1MWI1O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDEwMHB4OyAvKiBTZXRzIHRoZSBzdGlja3kgdG9vbGJhciB0byBiZSBvbiB0b3AgKi9cclxuICB6LWluZGV4OiAxMDAwOyAvKiBFbnN1cmUgdGhhdCB5b3VyIGFwcCdzIGNvbnRlbnQgZG9lc24ndCBvdmVybGFwIHRoZSB0b29sYmFyICovXHJcbiAgLm1hdC1saXN0LWl0ZW0tY29udGVudCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICB9XHJcblxyXG4gIG1hdC1saXN0LWl0ZW0gZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4udG9jLWNvbnRhaW5lciBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuIiwiLnRvYy1jb250YWluZXIge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMzZjUxYjU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxMDBweDtcbiAgLyogU2V0cyB0aGUgc3RpY2t5IHRvb2xiYXIgdG8gYmUgb24gdG9wICovXG4gIHotaW5kZXg6IDEwMDA7XG4gIC8qIEVuc3VyZSB0aGF0IHlvdXIgYXBwJ3MgY29udGVudCBkb2Vzbid0IG92ZXJsYXAgdGhlIHRvb2xiYXIgKi9cbn1cbi50b2MtY29udGFpbmVyIC5tYXQtbGlzdC1pdGVtLWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMDtcbn1cbi50b2MtY29udGFpbmVyIG1hdC1saXN0LWl0ZW0gZGl2OmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi50b2MtY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/admin/serivce-location-layout/serivce-location-layout.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/admin/serivce-location-layout/serivce-location-layout.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SerivceLocationLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerivceLocationLayoutComponent", function() { return SerivceLocationLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "./src/app/modules/admin/serivce-location-layout/data.service.ts");
/* harmony import */ var src_app_core_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/loader/loader.service */ "./src/app/core/loader/loader.service.ts");
/* harmony import */ var src_app_core_nomenclatoare_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/nomenclatoare.service */ "./src/app/core/nomenclatoare.service.ts");






var SerivceLocationLayoutComponent = /** @class */ (function () {
    function SerivceLocationLayoutComponent(route, locationService, nomenclatoareService, loaderService) {
        var _this = this;
        this.route = route;
        this.locationService = locationService;
        this.nomenclatoareService = nomenclatoareService;
        this.loaderService = loaderService;
        route.params.subscribe(function (val) {
            _this.locationId = parseInt(_this.route.snapshot.paramMap.get('id'));
            _this.generalInfoId = parseInt(_this.route.snapshot.paramMap.get('infoId'));
            if (!_this.locationId) {
                _this.locationId = 0;
            }
        });
    }
    SerivceLocationLayoutComponent.prototype.ngAfterViewInit = function () {
        this.LoadDate();
    };
    SerivceLocationLayoutComponent.prototype.ngOnInit = function () {
        this.locationId = parseInt(this.route.snapshot.paramMap.get('id'));
        this.generalInfoId = parseInt(this.route.snapshot.paramMap.get('infoId'));
        if (!this.locationId) {
            this.locationId = 0;
        }
    };
    SerivceLocationLayoutComponent.prototype.LoadDate = function () {
        var _this = this;
        this.loaderService.showMultiple(6);
        this.nomenclatoareService.GetCarManufacturers().subscribe(function (e) {
            _this.carManufacturers = e;
            _this.loaderService.hide();
        });
        this.nomenclatoareService.GetCities().subscribe(function (e) {
            _this.cities = e;
            _this.loaderService.hide();
        });
        this.nomenclatoareService.GetContactTypes().subscribe(function (e) {
            _this.contactTypes = e;
            _this.loaderService.hide();
        });
        this.nomenclatoareService.GetServiceFacilities().subscribe(function (e) {
            _this.serviceFacilities = e;
            _this.loaderService.hide();
        });
        this.nomenclatoareService.GetServiceOperations().subscribe(function (e) {
            _this.serviceOperations = e;
            _this.loaderService.hide();
        });
        this.nomenclatoareService.GetServiceOperationTypes().subscribe(function (e) {
            _this.serviceOperationTypes = e;
            _this.loaderService.hide();
        });
    };
    SerivceLocationLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-serivce-location-layout',
            template: __webpack_require__(/*! raw-loader!./serivce-location-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin/serivce-location-layout/serivce-location-layout.component.html"),
            styles: [__webpack_require__(/*! ./serivce-location-layout.component.scss */ "./src/app/modules/admin/serivce-location-layout/serivce-location-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            src_app_core_nomenclatoare_service__WEBPACK_IMPORTED_MODULE_5__["NomenclatoareService"],
            src_app_core_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]])
    ], SerivceLocationLayoutComponent);
    return SerivceLocationLayoutComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/shared/data.service.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/admin/shared/data.service.ts ***!
  \******************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.GetServiceIdByUserId = function (userId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("Id", userId.toString());
        return this.http.get("/api/ServiceGeneralInfo/GetIdByUserId", {
            params: params
        });
    };
    DataService.prototype.GetLocationList = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("id", id.toString());
        return this.http.get("/api/LocationInfo/GetByInfoId", {
            params: params
        });
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-admin-admin-module.js.map