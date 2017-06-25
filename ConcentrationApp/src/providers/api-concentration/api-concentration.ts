import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ApiConcentrationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ApiConcentrationProvider {

  public dataEasy: any;
  public dataNormal: any;
  public dataHard: any;

  constructor(public http: Http) {
    console.log('Hello ApiConcentrationProvider Provider');
  }

  getDataEasy() {
        if (this.dataEasy) {
          console.log("passou");
          return Promise.resolve(this.dataEasy);
        }

        return new Promise(resolve => {
            this.http.get('http://192.168.0.11:3000/scoresEasy')
            .map(res => res.json())
            .subscribe(data => {
                this.dataEasy = data;
                resolve(this.dataEasy);
            });
        });
  }

  getDataNormal() {
        if (this.dataNormal) {
          console.log("passou");
            return Promise.resolve(this.dataNormal);
        }

        return new Promise(resolve => {
            this.http.get('http://192.168.0.11:3000/scoresNormal')
            .map(res => res.json())
            .subscribe(data => {
                this.dataNormal = data;
                resolve(this.dataNormal);
            });
        });
  }

  getDataHard() {
        if (this.dataHard) {
          console.log("passou");
            return Promise.resolve(this.dataHard);
        }

        return new Promise(resolve => {
            this.http.get('http://192.168.0.11:3000/scoresHard')
            .map(res => res.json())
            .subscribe(data => {
                this.dataHard = data;
                resolve(this.dataHard);
            });
        });
  }

  saveScore(data) {
    return new Promise((resolve, reject) => {
      this.http.post('http://192.168.0.11:3000/scores/score', data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
