import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the MainProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MainProvider {
  
  
  public baseUrl : string = "https://noortamkeen.online/";
  public verseUrl : string = this.baseUrl+"verses";
  public AyatUrl : string = this.baseUrl+"ayat/";
  public getAyaUrl  : string = this.baseUrl+"getayainfoapi/"
  public versnameAudio : string = this.baseUrl+"verses_name_audio/" ;
  public ayaAudio : string = this.baseUrl+"ayat/";
  public tafsserAudio : string = this.baseUrl+"tafsser/";
  public gozaaUrl : string = this.baseUrl+"getsourbygoza/";
  public serachbyaya : string = this.baseUrl+"serachbyayaapi";
  public serachbysoura: string = this.baseUrl+"serachbysearchapi";


  constructor(public http: Http) {
    console.log('Hello MainProvider Provider');
  }
  
  getVerses():Observable<any>{
    return this.http.get(this.verseUrl).map((res) => res.json());
  }
  
  getAyat(versid):Observable<any>{
    return this.http.get(this.AyatUrl+versid).map((res) => res.json());
  }

  getAyaInfo(suraid , ayaid):Observable<any>{
    return this.http.get(this.getAyaUrl+ayaid+"/"+suraid).map((res) => res.json());
  }
  getGozaaSoura(gozzaid) :Observable<any>{

    return this.http.get(this.gozaaUrl+gozzaid).map((res) => res.json());
  }

  getAyaSearch(text){
   let body = {
    textofaya : text
   }
    return this.http.post(this.serachbyaya,body).map((res)=>res.json());
  }

  getSouraSearch(text){
    console.log("this text from ",text)
    let body = {
      verses_name : text
   }
   console.log("this text from ",body)
  return this.http.post(this.serachbysoura,body).map((res)=>res.json());
  }
}
