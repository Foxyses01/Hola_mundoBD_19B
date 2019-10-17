import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nombre ='';
  //nombre: string =''; es para solo cadenas

  constructor(public navCtrl: NavController) {

  }
  click() {
    console.log('Hola',this.nombre);
  }
}
