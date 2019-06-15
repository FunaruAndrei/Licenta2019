import { Injectable } from '@angular/core';
import { LoaderState } from './loader';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loaderSubject = new Subject<LoaderState>();

  loaderCount: number = 0;
  loaderState = this.loaderSubject.asObservable();

  constructor() { }

  show() {
    this.loaderCount = this.loaderCount + 1;
    this.loaderSubject.next(<LoaderState>{ show: this.loaderCount });
  }

  showMultiple(noCount: number) {
    let count = noCount;
    if (!noCount) {
      count = 1;
    }

    this.loaderCount = this.loaderCount + count;
    this.loaderSubject.next(<LoaderState>{ show: this.loaderCount });
  }

  hide() {
    this.loaderCount = this.loaderCount - 1;
    this.loaderSubject.next(<LoaderState>{ show: this.loaderCount });
  }
}
