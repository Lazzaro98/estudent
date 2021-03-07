import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardNeregistrovaniComponent } from './dashboard-neregistrovani/dashboard-neregistrovani.component';
import { TopComponent } from './top/top.component';
import { LeftSideNeregistrovanComponent } from './left-side-neregistrovan/left-side-neregistrovan.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ZaposleniComponent } from './zaposleni/zaposleni.component';
import { StudentskaTakmicenjaComponent } from './studentska-takmicenja/studentska-takmicenja.component';
import { KonferencijeComponent } from './konferencije/konferencije.component';
import { PosaoComponent } from './posao/posao.component';
import { PraksaComponent } from './praksa/praksa.component';
import { ListaPredmetaIRComponent } from './lista-predmeta-ir/lista-predmeta-ir.component';
import { ListaPredmetaSIComponent } from './lista-predmeta-si/lista-predmeta-si.component';
import { ListaPredmetaOstaliComponent } from './lista-predmeta-ostali/lista-predmeta-ostali.component';
import { MasterComponent } from './master/master.component';
import { ProjektiComponent } from './projekti/projekti.component';
import { IstrazivanjaComponent } from './istrazivanja/istrazivanja.component';
import { NaucniProjektiComponent } from './naucni-projekti/naucni-projekti.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { DashboardStudentComponent } from './dashboard-student/dashboard-student.component';
import { DashboardZaposleniComponent } from './dashboard-zaposleni/dashboard-zaposleni.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { MojaListaPredmetaComponent } from './moja-lista-predmeta/moja-lista-predmeta.component';
import { RegisterComponent } from './register/register.component';
import { ZaposlenInfoComponent } from './zaposlen-info/zaposlen-info.component';
import { SvaObavestenjaComponent } from './sva-obavestenja/sva-obavestenja.component';
import { MasterListaPredmetaComponent } from './master-lista-predmeta/master-lista-predmeta.component';
import { MojiPredmetiComponent } from './moji-predmeti/moji-predmeti.component';
import { WelcomeStudentComponent } from './welcome-student/welcome-student.component';
import { PredmetComponent } from './predmet/predmet.component';
import { ProfilComponent } from './profil/profil.component';
import { PredmetiZaposlenComponent } from './predmeti-zaposlen/predmeti-zaposlen.component';
import { PredmetZaposlenComponent } from './predmet-zaposlen/predmet-zaposlen.component';
import { VestiComponent } from './vesti/vesti.component';
import { DodajVestComponent } from './dodaj-vest/dodaj-vest.component';
import { EditVestiComponent } from './edit-vesti/edit-vesti.component';
import { PromenaSifreZaposlenComponent } from './promena-sifre-zaposlen/promena-sifre-zaposlen.component';
import { PromenaSifreStudentComponent } from './promena-sifre-student/promena-sifre-student.component';
import { WelcomeZaposleniComponent } from './welcome-zaposleni/welcome-zaposleni.component';
import { OPredmetuComponent } from './o-predmetu/o-predmetu.component';
import { PredavanjaComponent } from './predavanja/predavanja.component';
import { VezbeComponent } from './vezbe/vezbe.component';
import { IspitnaPitanjaComponent } from './ispitna-pitanja/ispitna-pitanja.component';
import { LabComponent } from './lab/lab.component';
import { PredmetniProjekatComponent } from './predmetni-projekat/predmetni-projekat.component';
import { UrediKorisnikeComponent } from './uredi-korisnike/uredi-korisnike.component';
import { UrediKorisnikaComponent } from './uredi-korisnika/uredi-korisnika.component';
import { UrediPredmeteComponent } from './uredi-predmete/uredi-predmete.component';
import { UrediPredmetComponent } from './uredi-predmet/uredi-predmet.component';
import { NapraviPlanComponent } from './napravi-plan/napravi-plan.component';
import { DodajPredmetComponent } from './dodaj-predmet/dodaj-predmet.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    DashboardNeregistrovaniComponent,
    TopComponent,
    LeftSideNeregistrovanComponent,
    LoginComponent,
    UserComponent,
    ZaposleniComponent,
    StudentskaTakmicenjaComponent,
    KonferencijeComponent,
    PosaoComponent,
    PraksaComponent,
    ListaPredmetaIRComponent,
    ListaPredmetaSIComponent,
    ListaPredmetaOstaliComponent,
    MasterComponent,
    ProjektiComponent,
    IstrazivanjaComponent,
    NaucniProjektiComponent,
    KontaktComponent,
    DashboardStudentComponent,
    DashboardZaposleniComponent,
    DashboardAdminComponent,
    MojaListaPredmetaComponent,
    RegisterComponent,
    ZaposlenInfoComponent,
    SvaObavestenjaComponent,
    MasterListaPredmetaComponent,
    MojiPredmetiComponent,
    WelcomeStudentComponent,
    PredmetComponent,
    ProfilComponent,
    PredmetiZaposlenComponent,
    PredmetZaposlenComponent,
    VestiComponent,
    DodajVestComponent,
    EditVestiComponent,
    PromenaSifreZaposlenComponent,
    PromenaSifreStudentComponent,
    WelcomeZaposleniComponent,
    OPredmetuComponent,
    PredavanjaComponent,
    VezbeComponent,
    IspitnaPitanjaComponent,
    LabComponent,
    PredmetniProjekatComponent,
    UrediKorisnikeComponent,
    UrediKorisnikaComponent,
    UrediPredmeteComponent,
    UrediPredmetComponent,
    NapraviPlanComponent,
    DodajPredmetComponent,
    EditAccountComponent,
    PocetnaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
  ],
  exports: [TranslateModule],
  providers: [ HttpClient, HttpClientModule],

  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient):any {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


