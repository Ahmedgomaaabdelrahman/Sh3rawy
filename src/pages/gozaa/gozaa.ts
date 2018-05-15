import { AllsuraPage } from './../allsura/allsura';
import { MainProvider } from './../../providers/main';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-gozaa',
  templateUrl: 'gozaa.html',
})
export class GozaaPage {

  constructor(public MainProvider:MainProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GozaaPage');
  }
  
  gotoSura(id : number){
    this.navCtrl.push(AllsuraPage, {gozaaid : id});
  }
 
  back(){
    this.navCtrl.pop();
  }
}
