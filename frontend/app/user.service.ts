import { normalizePassiveListenerOptions } from '@angular/cdk/platform';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjektiComponent } from './projekti/projekti.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  uri = 'http://localhost:4000'

  login(username, password){
    const data = {
      username:username,
      password:password
    }
    return this.http.post(`${this.uri}/login`,data);
  }
  registerZ(username, password, name,surname,mail,tel,website,bio,zvanje,classnum,status){
    const data = {
      username:username,
      password: password,
      name: name,
      surname: surname,
      mail: mail,
      number:tel,
      website:website,
      bio:bio,
      zvanje:zvanje,
      classnum:classnum,
      status:status,
      type:1,
      prvaprijava:1
    }

    return this.http.post(`${this.uri}/register`,data);
  }

  dodajPredmet(naziv, informacije, semestar){
    const data = {
      naziv:naziv,
      informacije:informacije,
      semestar:semestar
    }
    return this.http.post(`${this.uri}/dodaj-predmet`,data);
  }

  removePredmet(naziv){
    const data= {
      naziv:naziv
    }
    return this.http.post(`${this.uri}/remove-predmet`,data);
  }
  removeKorisnika(username){
    const data= {
      username:username
    }
    return this.http.post(`${this.uri}/remove-user`,data);
  }
  updateSpisak(predmet,spiskovi){
    const data={
      predmet:predmet,
      spiskovi:spiskovi
    }
    
    return this.http.post(`${this.uri}/update-spisak`,data);
    //alert(1);
  }

  updateOPredmetu(naziv,opredmetu){
    const data = {
      naziv:naziv,
      informacije:opredmetu
    }
    return this.http.post(`${this.uri}/update-o-predmetu`, data);
  }

  updatePredavanja(naziv,predavanja){
    const data = {
      naziv:naziv,
      predavanja:predavanja
    }
    return this.http.post(`${this.uri}/update-predavanja`, data);
  }
  updateVezbe(naziv,vezbe){
    const data = {
      naziv:naziv,
      vezbe:vezbe
    }
    return this.http.post(`${this.uri}/update-vezbe`, data);
  }
  updateIspiti(naziv,ispiti){
    const data = {
      naziv:naziv,
      ispiti:ispiti
    }
    return this.http.post(`${this.uri}/update-ispiti`, data);
  }
  updateLab(naziv,lab){
    const data = {
      naziv:naziv,
      lab:lab
    }
    return this.http.post(`${this.uri}/update-lab`, data);
  }

  updateProjekat(naziv,projekat){
    const data = {
      naziv:naziv,
      projekat:projekat
    }
    return this.http.post(`${this.uri}/update-projekat`, data);
  }

  updateVest(naslov,predmeti,tekst,datum,Fajlovi){
    const data = {
      naslov:naslov,
      predmeti:predmeti,
      tekst:tekst,
      datum:datum,
      Fajlovi:Fajlovi
    }
    return this.http.post(`${this.uri}/update-vest`, data);

  }
  updateUser(username,password,name,surname,mail,number,website,bio,classnum,prvaprijava,predmeti,image){
    const data={
      username:username,
      password:password,
      name:name,
      surname:surname,
      mail:mail,
      number:number,
      website:website,
      bio:bio,
      classnum:classnum,
      prvaprijava:prvaprijava,
      predmeti:predmeti,
      image:image
    }

    return this.http.post(`${this.uri}/update-user`, data);

  }
  registerS(username,password,name,surname,indeks,tipStudija,status){
    const data = {
      username:username,
      password: password,
      name: name,
      surname: surname,
      indeks: indeks,
      tipStudija:tipStudija,
      status:status,
      type:2,
      prvaprijava:1
    }

    return this.http.post(`${this.uri}/register`,data);
  }

  predmeti(){
    return this.http.get(`${this.uri}/predmet`);
  }
  users(){
    return this.http.get(`${this.uri}/user`);
  }
  obavestenja(){
    return this.http.get(`${this.uri}/obavestenje`);
  }
  projekti(){
    return this.http.get(`${this.uri}/projekat`);
  }
  naucniProjekti(){
    return this.http.get(`${this.uri}/naucni-projekat`);
  }

  vesti(){
    return this.http.get(`${this.uri}/vesti`);
  }
  dodajVest(naslov,predmeti,tekst,datum,fajlovi){
    const data = {
      naslov:naslov,
      predmeti:predmeti,
      tekst:tekst,
      datum:datum,
      fajlovi:fajlovi
    }

    return this.http.post(`${this.uri}/dodaj-vest`,data);
  }







  uploadProjekti(fileToUpload: File,dir) {
    const endpoint = `${this.uri}/upload-projekti`;
    const formData = new FormData();
    formData.append('file', fileToUpload);
    console.log(formData);
    const data = {
      formData:formData,
      dir:dir
    }
    return this.http
      .post(endpoint, formData)

  }


  uploadPredavanje(fileToUpload: File,dir) {
    const endpoint = `${this.uri}/upload-predavanje`;
    const formData = new FormData();
    formData.append('file', fileToUpload);
    console.log(formData);
    const data = {
      formData:formData,
      dir:dir
    }
    //formData.append('nes','nes');
    return this.http
      .post(endpoint, formData)

  }


  uploadVezbe(fileToUpload: File,dir) {
    const endpoint = `${this.uri}/upload-vezbe`;
    const formData = new FormData();
    formData.append('file', fileToUpload);
    console.log(formData);
    const data = {
      formData:formData,
      dir:dir
    }
    return this.http
      .post(endpoint, formData)

  }


  uploadIspiti(fileToUpload: File,dir) {
    const endpoint = `${this.uri}/upload-ispiti`;
    const formData = new FormData();
    formData.append('file', fileToUpload);
    console.log(formData);
    const data = {
      formData:formData,
      dir:dir
    }
    return this.http
      .post(endpoint, formData)

  }


  uploadLabovi(fileToUpload: File,dir) {
    const endpoint = `${this.uri}/upload-labovi`;
    const formData = new FormData();
    formData.append('file', fileToUpload);
    console.log(formData);
    const data = {
      formData:formData,
      dir:dir
    }
    return this.http
      .post(endpoint, formData)
  }

  upload(fileToUpload: File,dir) {
    const endpoint = `${this.uri}/upload`;
    const formData = new FormData();
    formData.append('file', fileToUpload);
    console.log(formData);
    const data = {
      formData:formData,
      dir:dir
    }
    formData.append('dir',dir);
    return this.http
      .post(endpoint, formData)
  }
}
