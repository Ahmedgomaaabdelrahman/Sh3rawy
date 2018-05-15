import { AyaPage } from './../aya/aya';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { MainProvider } from '../../providers/main';


@Component({
  selector: 'page-allayat',
  templateUrl: 'allayat.html',
})
export class AllayatPage {
  searchaya : string;
  ayat:any[];
  searchall:any[];
  constructor(public mainprovider:MainProvider,public toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams) {
    this.searchaya = this.navParams.get('matches');
    this.searchall = this.navParams.get('mmmm');
    // this.presentToast("Suraaaaa"+this.searchaya);
    if(this.searchaya){
      this.mainprovider.getAyaSearch(this.searchaya).subscribe((res)=>{
        // this.presentToast(res[0]);
        console.log(res[0]);
        this.ayat = res;
      });
      
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllayatPage');
    this.searchaya = this.navParams.get('matches');
    this.searchall = this.navParams.get('mmmm');
    // this.presentToast("Suraaaaa"+this.searchaya);
    if(this.searchaya){
      this.mainprovider.getAyaSearch(this.searchaya).subscribe((res)=>{
        // this.presentToast(res[0]);
        console.log(res[0]);
        this.ayat = res;
      });
      
    }
  }
  presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000
    });
    toast.present();
  }
  goaya(ayat_id, suraid){
    this.navCtrl.push(AyaPage , {ayat_id : ayat_id , suraid :suraid});
  }

  back(){
    this.navCtrl.pop();
  }
}
