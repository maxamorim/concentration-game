import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import xml2js from 'xml2js';
import 'rxjs/add/operator/map';

/*
  Generated class for the FlickrDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FlickrDataProvider {

  public xmlItems : any;

  constructor(public http: Http) {
    console.log('Hello FlickrDataProvider Provider');
  }

  getData() {
    this.http.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=5105525893fc79388b3a6c7439e34f29&text=kitten')
    .map(res => res.text())
    .subscribe(data => {
        this.parseXML(data)
         
         .then((data)=>
         {
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
        console.log(result);
         var obj = result.rsp.photos[0];
         console.log(obj);
         for(p in obj.photo)
         {
            var item = obj.photo[p];
            arr.push({
               id         : item.$.id,
               owner      : item.$.owner,
               secret     : item.$.secret,
               server     : item.$.server,
               farm       : item.$.farm,
               title      : item.$.title,
               ispublic   : item.$.ispublic,
               isfriend   : item.$.isfriend,
               isfamily   : item.$.isfamily
            });
         }

         resolve(arr);
      });
   });
}

}
