import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { ApiConcentrationProvider } from '../../providers/api-concentration/api-concentration';

@Component({
    selector: 'page-top-score',
    templateUrl: 'top-score.html',
})

export class TopScore {

    public easyItems: any;
    public normalItems: any;
    public hardItems: any;

    constructor(public navCtrl: NavController,
                public apiConcentrationService: ApiConcentrationProvider,
                public http: Http) {
        this.getDataEasy();
        this.getDataNormal();
        this.getDataHard();
    }

    getDataEasy() {
        this.apiConcentrationService.getDataEasy()
        .then((data) => {
            this.easyItems = data;
            console.log(this.easyItems);
        });
    }

    getDataNormal() {
        this.apiConcentrationService.getDataNormal()
        .then((data) => {
            this.normalItems = data;
        });
    }

    getDataHard() {
        this.apiConcentrationService.getDataHard()
        .then((data) => {
            this.hardItems = data;
        });
    }

    backToHome() {
        this.navCtrl.popToRoot();
    }

}