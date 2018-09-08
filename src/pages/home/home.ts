import { Component, Input } from '@angular/core';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name1: string = '';
  name2: string = '';
  get score() {
    const letters = (this.name1 + this.name2).toLowerCase() ;
    let sum = 0;
    for(let i = 0; i < letters.length; i = i + 1) {
      sum += letters.charCodeAt(i);
    }
    return sum % 101;
  }
  // constructor(public navCtrl: NavController) {
   
  // }

}
