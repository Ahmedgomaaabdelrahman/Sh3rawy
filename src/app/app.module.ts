import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility';
import { Media } from '@ionic-native/media';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { SuraPage } from '../pages/sura/sura';
import { AllsuraPage } from '../pages/allsura/allsura';
import { AyaPage } from '../pages/aya/aya';
import { GozaaPage } from '../pages/gozaa/gozaa';
import { MainProvider } from '../providers/main';
import { Http, HttpModule } from '@angular/http';
import { AllayatPage } from '../pages/allayat/allayat';
import { FileTransfer,FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { NativeAudio } from '@ionic-native/native-audio';
import { ShowtextPage } from '../pages/showtext/showtext';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GozaaPage,
    AyaPage,
    AllsuraPage,
    SuraPage,
    AllayatPage,
    ShowtextPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GozaaPage,
    AyaPage,
    AllsuraPage,
    SuraPage,
    AllayatPage,
    ShowtextPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MobileAccessibility,
    Media,
    TextToSpeech,
    SpeechRecognition,
    MainProvider,
    File, 
    FileTransfer,  
    FileTransferObject,
    NativeAudio
  ]
})
export class AppModule {}
