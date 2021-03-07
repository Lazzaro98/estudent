import { registerLocaleData } from '@angular/common';
import { ComponentRef, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardNeregistrovaniComponent } from './dashboard-neregistrovani/dashboard-neregistrovani.component';
import { DashboardNeregistrovaniRoutes } from './dashboard-neregistrovani/dashboard-neregistrovani.routes';
import { DashboardStudentComponent } from './dashboard-student/dashboard-student.component';
import { DashboardZaposleniComponent } from './dashboard-zaposleni/dashboard-zaposleni.component';
import { DodajPredmetComponent } from './dodaj-predmet/dodaj-predmet.component';
import { DodajVestComponent } from './dodaj-vest/dodaj-vest.component';
import { EditVestiComponent } from './edit-vesti/edit-vesti.component';
import { IspitnaPitanjaComponent } from './ispitna-pitanja/ispitna-pitanja.component';
import { IstrazivanjaComponent } from './istrazivanja/istrazivanja.component';
import { KonferencijeComponent } from './konferencije/konferencije.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { LabComponent } from './lab/lab.component';
import { ListaPredmetaIRComponent } from './lista-predmeta-ir/lista-predmeta-ir.component';
import { ListaPredmetaOstaliComponent } from './lista-predmeta-ostali/lista-predmeta-ostali.component';
import { ListaPredmetaSIComponent } from './lista-predmeta-si/lista-predmeta-si.component';
import { LoginComponent } from './login/login.component';
import { MasterListaPredmetaComponent } from './master-lista-predmeta/master-lista-predmeta.component';
import { MasterComponent } from './master/master.component';
import { Predmet } from './model/predmet';
import { MojaListaPredmetaComponent } from './moja-lista-predmeta/moja-lista-predmeta.component';
import { MojiPredmetiComponent } from './moji-predmeti/moji-predmeti.component';
import { NapraviPlanComponent } from './napravi-plan/napravi-plan.component';
import { NaucniProjektiComponent } from './naucni-projekti/naucni-projekti.component';
import { OPredmetuComponent } from './o-predmetu/o-predmetu.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { PosaoComponent } from './posao/posao.component';
import { PraksaComponent } from './praksa/praksa.component';
import { PredavanjaComponent } from './predavanja/predavanja.component';
import { PredmetZaposlenComponent } from './predmet-zaposlen/predmet-zaposlen.component';
import { PredmetComponent } from './predmet/predmet.component';
import { PredmetiZaposlenComponent } from './predmeti-zaposlen/predmeti-zaposlen.component';
import { PredmetniProjekatComponent } from './predmetni-projekat/predmetni-projekat.component';
import { ProfilComponent } from './profil/profil.component';
import { ProjektiComponent } from './projekti/projekti.component';
import { PromenaSifreStudentComponent } from './promena-sifre-student/promena-sifre-student.component';
import { PromenaSifreZaposlenComponent } from './promena-sifre-zaposlen/promena-sifre-zaposlen.component';
import { RegisterComponent } from './register/register.component';
import { StudentskaTakmicenjaComponent } from './studentska-takmicenja/studentska-takmicenja.component';
import { SvaObavestenjaComponent } from './sva-obavestenja/sva-obavestenja.component';
import { UrediKorisnikaComponent } from './uredi-korisnika/uredi-korisnika.component';
import { UrediKorisnikeComponent } from './uredi-korisnike/uredi-korisnike.component';
import { UrediPredmetComponent } from './uredi-predmet/uredi-predmet.component';
import { UrediPredmeteComponent } from './uredi-predmete/uredi-predmete.component';
import { VestiComponent } from './vesti/vesti.component';
import { VezbeComponent } from './vezbe/vezbe.component';
import { WelcomeStudentComponent } from './welcome-student/welcome-student.component';
import { WelcomeZaposleniComponent } from './welcome-zaposleni/welcome-zaposleni.component';
import { ZaposlenInfoComponent } from './zaposlen-info/zaposlen-info.component';
import { ZaposleniComponent } from './zaposleni/zaposleni.component';

const routes: Routes = [
 // {path:'login',component:LoginComponent},
  {path:'zaposleni',component:ZaposleniComponent},
  {path:'studentska-takmicenja', component:StudentskaTakmicenjaComponent},
  {path:'konferencije', component:KonferencijeComponent },
  {path:'praksa', component:PraksaComponent},
  {path:'posao', component:PosaoComponent },
  {path:'istrazivanja', component:IstrazivanjaComponent},
  {path:'kontakt', component:KontaktComponent},
  {path:'lista-predmeta-ir', component:ListaPredmetaIRComponent},
  {path:'lista-predmeta-ostali', component:ListaPredmetaOstaliComponent},
  {path:'lista-predmeta-si', component:ListaPredmetaSIComponent},
  {path:'master', component:MasterComponent},
  {path:'naucni-projekti', component:NaucniProjektiComponent},
  {path:'projekti', component:ProjektiComponent},
  {path:'dashboard-student', component:DashboardStudentComponent, children:[
     { 
        path:'moja-lista-predmeta',
        outlet:'outlet-moja-lista-predmeta',
        component: MojaListaPredmetaComponent
    },
  ]
},
  {path:'dashboard-admin', component:DashboardAdminComponent, children:[
    {
      path:'pocetna',
      component:PocetnaComponent
    },
    {
      path:'uredi-predmete',
      component:UrediPredmeteComponent
    },
    {
      path:'uredi-predmet/:id',
      component:UrediPredmetComponent,
      children:[
        {
          path:'o-predmetu',
          component:OPredmetuComponent
        },
        {
          path:'predavanja',
          component:PredavanjaComponent
        },
        {
          path:'vezbe',
          component:VezbeComponent
        },
        {
          path:'ispitna-pitanja',
          component:IspitnaPitanjaComponent,
          children:[
            {
              path:'lab',
              component:LabComponent
            },
            {
              path:'predmetni-projekat',
              component:PredmetniProjekatComponent
            }
          ]
        }
      ]
    },
    {
      path:'uredi-korisnike',
      component:UrediKorisnikeComponent
    },
    {
      path:'uredi-korisnika/:id',
      component:UrediKorisnikaComponent
    },
    {
      path:'napravi-plan',
      component:NapraviPlanComponent
    },
    {
      path:'dodaj-predmet',
      component:DodajPredmetComponent
    },
    {
      path:'dodaj-korisnika',
      component:RegisterComponent
    }
  ]},
  {path:'dashboard-zaposleni',component:DashboardZaposleniComponent,children:[
    {
      path:'pocetna',
      component:PocetnaComponent
    },
    {
      path:'profil',
      component:ProfilComponent
    },
    {
      path:'predmeti-zaposlen',
      component:PredmetiZaposlenComponent
    },
    {
      path:'predmet-zaposlen/:id',
      component:PredmetZaposlenComponent,
      children:[
        {
          path:'o-predmetu',
          component:OPredmetuComponent
        },
        {
          path:'predavanja',
          component:PredavanjaComponent
        },
        {
          path:'vezbe',
          component:VezbeComponent
        },
        {
          path:'ispitna-pitanja',
          component:IspitnaPitanjaComponent,
          children:[
            {
              path:'lab',
              component:LabComponent
            },
            {
              path:'predmetni-projekat',
              component:PredmetniProjekatComponent
            }
          ]
        }
      ]
    },
    {
      path:'vesti',
      component:VestiComponent 
    },
    {
      path:'dodaj-vest',
      component:DodajVestComponent
    },
    {
      path:'edit-vesti',
      component:EditVestiComponent
    },
    
    {
      path:'welcome-zaposleni',
      component:WelcomeZaposleniComponent
    }
  ]},
  {
    path:'promena-sifre-zaposlen',
    component:PromenaSifreZaposlenComponent
  },
  {
    path:'promena-sifre-student',
    component:PromenaSifreStudentComponent
  },
  {path:'dashboard-admin', component:DashboardAdminComponent},
  {path:'', redirectTo:'dashboard-neregistrovani', pathMatch: 'full' },
  {path:'dashboard-neregistrovani',component:DashboardNeregistrovaniComponent, children:[
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'register',
        component:RegisterComponent
      },
      {
        path:'zaposleni',
        component:ZaposleniComponent
      },
      {
        path:'studentska-takmicenja',
        component:StudentskaTakmicenjaComponent
      },
      {
        path:'konferencije',
        component:KonferencijeComponent
      },
      {
        path: 'sva-obavestenja',
        component: SvaObavestenjaComponent
      },
      {
        path:'praksa',
        component:PraksaComponent
      },
      {
        path:'posao',
        component:PosaoComponent
      },
      {
        path:'istrazivanja',
        component:IstrazivanjaComponent
      },
      {
        path:'kontakt',
        component:KontaktComponent
      },
      {
        path:'lista-predmeta-ir',
        component:ListaPredmetaIRComponent
      },
      {
        path:'master-lista-predmeta',
        component:MasterListaPredmetaComponent
      },
      {
        path:'lista-predmeta-ostali',
        component:ListaPredmetaOstaliComponent
      },
      {
        path:'lista-predmeta-si',
        component:ListaPredmetaSIComponent
      },
      {
        path:'master',
        component:MasterComponent
      },
      {
        path:'naucni-projekti',
        component:NaucniProjektiComponent
      },
      {
        path:'projekti',
        component:ProjektiComponent
      },
      {
        path:'zaposlen-info/:id',
        component:ZaposlenInfoComponent
      }
  ]
  },


  {path:'dashboard-student',component:DashboardStudentComponent, children:[
    {
      path:'pocetna',
      component:PocetnaComponent
    },
    {
      path:'welcome-student',
      component:WelcomeStudentComponent
    },
    {
      path:'moji-predmeti',
      component:MojiPredmetiComponent
    },
    {
      path:'register',
      component:RegisterComponent
    },
    {
      path:'zaposleni',
      component:ZaposleniComponent
    },
    {
      path:'studentska-takmicenja',
      component:StudentskaTakmicenjaComponent
    },
    {
      path:'konferencije',
      component:KonferencijeComponent
    },
    {
      path: 'sva-obavestenja',
      component: SvaObavestenjaComponent
    },
    {
      path:'praksa',
      component:PraksaComponent
    },
    {
      path:'posao',
      component:PosaoComponent
    },
    {
      path:'istrazivanja',
      component:IstrazivanjaComponent
    },
    {
      path:'kontakt',
      component:KontaktComponent
    },
    {
      path:'lista-predmeta-ir',
      component:ListaPredmetaIRComponent
    },
    {
      path:'master-lista-predmeta',
      component:MasterListaPredmetaComponent
    },
    {
      path:'lista-predmeta-ostali',
      component:ListaPredmetaOstaliComponent
    },
    {
      path:'lista-predmeta-si',
      component:ListaPredmetaSIComponent
    },
    {
      path:'master',
      component:MasterComponent
    },
    {
      path:'naucni-projekti',
      component:NaucniProjektiComponent
    },
    {
      path:'projekti',
      component:ProjektiComponent
    },
    {
      path:'zaposlen-info/:id',
      component:ZaposlenInfoComponent
    },
    {
      path:'predmet/:id',
      component:PredmetComponent
    },
    
]
,}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
