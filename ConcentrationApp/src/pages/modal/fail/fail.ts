import { Component } from '@angular/core';
import { NavController, ViewController, NavParams  } from 'ionic-angular';

import { EasyPage } from '../../easy/easy';
import { NormalPage } from '../../normal/normal';
import { HardPage } from '../../hard/hard';

@Component({
    selector: 'page-fail',
    templateUrl: 'fail.html'
})

export class FailPage {

    public page: any;
    public score: any;
    public time: any;

    constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams) {
        this.page = navParams.get('page');
        this.score = navParams.get('score');
        this.time = navParams.get('time');
    }

    public navHome() {
        this.navCtrl.popToRoot();
    }

    public navEasy() {
        const startIndex = this.navCtrl.getActive().index - 1;
        this.navCtrl.remove(startIndex, 1);
        switch(this.page){
            case "easy":
                this.navCtrl.push(EasyPage);
                break;
            case "normal":
                this.navCtrl.push(NormalPage);
                break;
            case "hard":
                this.navCtrl.push(HardPage);
                break;
        }

    }

}