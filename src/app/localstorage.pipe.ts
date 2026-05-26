import { Pipe, PipeTransform } from '@angular/core';
import { LocalstorageService } from './localstorage.service';

@Pipe({
  name: 'localstorage'
})
export class LocalstoragePipe implements PipeTransform {

  constructor(private _localStorage: LocalstorageService) {}

  transform(key: string) {
    return this._localStorage.getItem(key)
  }

}
