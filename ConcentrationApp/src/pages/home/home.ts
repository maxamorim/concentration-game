import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EasyPage } from '../easy/easy';
import { NormalPage } from '../normal/normal';
import { HardPage } from '../hard/hard';
import { TopScore } from '../top-score/top-score';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public navEasy() {
    this.navCtrl.push(EasyPage);
  }

  public navNormal() {
    this.navCtrl.push(NormalPage);
  }

  public navHard() {
    this.navCtrl.push(HardPage);
  }

  public navTopScores(){
    this.navCtrl.push(TopScore);
  }

}
