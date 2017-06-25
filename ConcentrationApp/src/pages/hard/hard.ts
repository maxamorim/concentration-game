import { Component } from '@angular/core';
import { NavController, ModalController, ViewController  } from 'ionic-angular';
import { Http } from '@angular/http';
import xml2js from 'xml2js';
import 'rxjs/add/operator/map';

import { ResumePage } from '../modal/resume';
import { FailPage } from '../modal/fail/fail';
import { ApiConcentrationProvider } from '../../providers/api-concentration/api-concentration';

@Component({
    selector: 'page-hard',
    templateUrl: 'hard.html'
})

export class HardPage {

    
    public xmlItems: any;
    public imgId: any;
    public imgIdRef: any;
    public imgIdLayer: any;
    public ready: boolean;
    public count: number = 30;
    public interval: any;
    hard = {
        score: 0,
        time: "0:30",
        level: "hard",
    }

    constructor(public navCtrl: NavController, 
                public modalCtrl: ModalController, 
                public viewCtrl: ViewController,
                public apiConcentrationService: ApiConcentrationProvider,
                public http: Http) {
        
    }

    ionViewWillEnter() {
        this.getData();
        this.ready = false;
    }

    getData() {
        this.http.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=5105525893fc79388b3a6c7439e34f29&text=kitten')
        .map(res => res.text())
        .subscribe(data => {
            this.parseXML(data)
            .then((data)=>
            {
                this.randomize(data);
                this.xmlItems = data;
            }); 
        });
    }

    parseXML(data)
    {
        return new Promise(resolve =>
        {
            var p,
                arr    = [],
                parser = new xml2js.Parser(
                {
                    trim: true,
                    explicitArray: true
                });

            parser.parseString(data, function (err, result)
            {
                var obj = result.rsp.photos[0];
                var count = 0;
                for(p in obj.photo)
                {
                    var item = obj.photo[p];
                    arr.push({
                    refId      : count++,
                    id         : item.$.id,
                    owner      : item.$.owner,
                    secret     : item.$.secret,
                    server     : item.$.server,
                    farm       : item.$.farm,
                    title      : item.$.title,
                    ispublic   : item.$.ispublic,
                    isfriend   : item.$.isfriend,
                    isfamily   : item.$.isfamily,
                    layerId    : "layer" + count
                    });
                    arr.push({
                    refId      : count++,
                    id         : item.$.id,
                    owner      : item.$.owner,
                    secret     : item.$.secret,
                    server     : item.$.server,
                    farm       : item.$.farm,
                    title      : item.$.title,
                    ispublic   : item.$.ispublic,
                    isfriend   : item.$.isfriend,
                    isfamily   : item.$.isfamily,
                    layerId    : "layer" + count
                    });

                    if(p == 5){
                        break;
                    }
                }

                resolve(arr);
            });
        });
    }   

    randomize(a) {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
    }

    hideElements() {
        this.ready = true;
        var btnReady = document.getElementById('btn-ready');
        btnReady.hidden = true;

        var kittens = document.getElementsByTagName('img');
        console.log(kittens);
        for (var i = 0; i < kittens.length; i++){
            if (kittens[i].className == "kittens"){
                kittens[i].className = "hidden-kittens"
            }
        }

        var layers = document.getElementsByTagName('div');
        console.log(layers);
        for (var i = 0; i < layers.length; i++){
            if (layers[i].className == "layer"){
                layers[i].className = "new-layer"
            }
        }

        var time = this;
        this.interval = setInterval(function() {
            time.counter();
        }, 1000);
        
        this.count = 30;
    }

    counter() {
        this.count--;
            var str = '0:' + (this.count < 10 ? '0' + this.count : this.count);
            console.log(str);
            if (this.count >= 0) {
                this.hard.time = str;
            }
            if (this.count === 0) {
                this.showPageFail();
            }
    }

    selectImg(id, idRef, idLayer) {
        if(this.ready == false){
            return;
        }

        var kitten = document.getElementById(idRef);
        kitten.className = "kittens";

        var layer = document.getElementById(idLayer);
        layer.className = "layer";
        

        var kittenTwo = document.getElementById(this.imgIdRef);
        var layerTwo = document.getElementById(this.imgIdLayer);
        

        if (this.imgId == undefined){
            this.imgId = id;
            this.imgIdRef = idRef;
            this.imgIdLayer = idLayer;
            return;
        }
        if (this.imgIdRef == idRef){
            return;
        }
        if (this.imgId == id){
            this.imgId = undefined;
            this.imgIdRef = undefined;
            this.hard.score++;
            if (this.hard.score == 6){
                this.showPageResume();
            }
        } else {
            this.imgId = undefined;
            this.imgIdRef = undefined;
            this.imgIdLayer = undefined;
            setTimeout(function(){
                kitten.className = "hidden-kittens";
                kittenTwo.className = "hidden-kittens";

                layer.className = "new-layer";
                layerTwo.className = "new-layer";
            }, 500)
            
        }
    }

    saveScore() {
        this.apiConcentrationService.saveScore(this.hard).then((result) => {
            console.log(result);
        }, (err) => {
            console.log(err);
        });
    }

    showPageResume() {
        clearInterval(this.interval);
        this.saveScore();
        this.navCtrl.push(ResumePage, {page: 'hard', score: this.hard.score, time: this.hard.time});
    }

    showPageFail() {
        clearInterval(this.interval);
        this.navCtrl.push(FailPage, {page: 'hard', score: this.hard.score, time: this.hard.time});
    }

    backToHome() {
        clearInterval(this.interval);
        this.navCtrl.popToRoot();
    } 

}