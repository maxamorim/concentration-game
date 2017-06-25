import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EasyPage } from '../pages/easy/easy';
import { NormalPage } from '../pages/normal/normal';
import { HardPage } from '../pages/hard/hard';
import { ResumePage } from '../pages/modal/resume';
import { FailPage } from '../pages/modal/fail/fail';
import { TopScore } from '../pages/top-score/top-score';
import { FlickrDataProvider } from '../providers/flickr-data/flickr-data';
import { ApiConcentrationProvider } from '../providers/api-concentration/api-concentration';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EasyPage,
    NormalPage,
    HardPage,
    ResumePage,
    FailPage,
    TopScore
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EasyPage,
    NormalPage,
    HardPage,
    ResumePage,
    FailPage,
    TopScore
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FlickrDataProvider,
    ApiConcentrationProvider,
  ]
})
export class AppModule {}
