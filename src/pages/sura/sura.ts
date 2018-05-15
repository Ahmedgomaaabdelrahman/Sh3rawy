import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainProvider } from './../../providers/main';
import { AyaPage } from '../aya/aya';


@Component({
  selector: 'page-sura',
  templateUrl: 'sura.html',
})
export class SuraPage {
  sura : string;
  veers : any;
  ayat;

  constructor(public MainProvider : MainProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.sura = this.navParams.get('matches');
    console.log("Sourraaaa aha",this.sura);
    this.MainProvider.getSouraSearch(this.sura).subscribe((ayat)=>{
          console.log("itsresponse" , ayat);
          this.ayat = ayat;
        });

    if (this.sura){
     this.MainProvider.getSouraSearch(this.sura).subscribe((ayat)=>{
          console.log("itsresponse" , ayat);
          this.ayat = ayat;
          
        });
    }
    else {
      this.veers = this.navParams.get('vers');
      this.MainProvider.getAyat(this.veers.verses_id).subscribe((res)=>{ 
        console.log(res);
        
        this.sura = this.veers.verses_name;
        this.ayat = res;
      });
    }
  
    // console.log("Souraaaa",this.veers);
    // console.log("this.veers.verses_id",this.veers.verses_id);
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuraPage');
    this.sura = this.navParams.get('matches');
    console.log("Sourraaaa aha",this.sura);
    this.MainProvider.getSouraSearch(this.sura).subscribe((ayat)=>{
          console.log("itsresponse" , ayat);
          this.ayat = ayat;
        });

    if (this.sura){
     this.MainProvider.getSouraSearch(this.sura).subscribe((ayat)=>{
          console.log("itsresponse" , ayat);
          this.ayat = ayat;
          
        });
    }
    else {
      this.veers = this.navParams.get('vers');
      this.MainProvider.getAyat(this.veers.verses_id).subscribe((res)=>{ 
        console.log(res);
        
        this.sura = this.veers.verses_name;
        this.ayat = res;
      });
    }
  }
  

  goaya(ayat_id ,versid){
    this.navCtrl.push(AyaPage , {ayat_id : ayat_id , suraid : versid});
  }

  back(){
    this.navCtrl.pop();
  } 
}
