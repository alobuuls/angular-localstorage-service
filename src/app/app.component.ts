import { Component } from '@angular/core';
import { LocalstorageService } from './localstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _localStorage: LocalstorageService) {
    this._localStorage.setItem('clave1', 'Hola');
    this._localStorage.setItem('clave2', 'Mundo');
    this._localStorage.setItem('clave3', 10 + '');
    this._localStorage.setItem('clave4', JSON.stringify({'prop1': 'value1'}));
  }
}
