import { registerLocaleData } from "@angular/common";
import {Routes} from "@angular/router";
import { IstrazivanjaComponent } from "../istrazivanja/istrazivanja.component";
import { KonferencijeComponent } from "../konferencije/konferencije.component";
import { KontaktComponent } from "../kontakt/kontakt.component";
import { ListaPredmetaIRComponent } from "../lista-predmeta-ir/lista-predmeta-ir.component";
import { ListaPredmetaOstaliComponent } from "../lista-predmeta-ostali/lista-predmeta-ostali.component";
import { ListaPredmetaSIComponent } from "../lista-predmeta-si/lista-predmeta-si.component";
import { LoginComponent } from "../login/login.component";
import { MasterComponent } from "../master/master.component";
import { NaucniProjektiComponent } from "../naucni-projekti/naucni-projekti.component";
import { PosaoComponent } from "../posao/posao.component";
import { PraksaComponent } from "../praksa/praksa.component";
import { ProjektiComponent } from "../projekti/projekti.component";
import { RegisterComponent } from "../register/register.component";
import { StudentskaTakmicenjaComponent } from "../studentska-takmicenja/studentska-takmicenja.component";
import { ZaposleniComponent } from "../zaposleni/zaposleni.component";
import { DashboardNeregistrovaniComponent } from "./dashboard-neregistrovani.component";


export const DashboardNeregistrovaniRoutes:Routes = [
    {
        path:'dashboard-neregistrovani',
        component:DashboardNeregistrovaniComponent,
        children:[
            {
                path:'/register',
                component:RegisterComponent
            },
            {
                path:'/login',
                outlet:'outlet-login',
                component:LoginComponent
            },
            {
                path:'/zaposleni',
                outlet:'outlet-zaposleni',
                component:ZaposleniComponent
            },
            {
                path:'/studentska-takmicenja',
                outlet:'outlet-studentska-takmicenja',
                component:StudentskaTakmicenjaComponent
            },
            {
                path:'/konferencije',
                outlet:'outlet-konferencije',
                component:KonferencijeComponent
            },
            {
                path:'/praksa',
                outlet:'outlet-praksa',
                component:PraksaComponent
            },
            {
                path:'/posao',
                outlet:'outlet-posao',
                component:PosaoComponent
            },
            {
                path:'/istrazivanja',
                outlet:'outlet-istrazivanja',
                component:IstrazivanjaComponent
            },
            {
                path:'/kontakt',
                outlet:'outlet-kontakt',
                component:KontaktComponent
            },
            {
                path:'/lista-predmeta-ir',
                outlet:'outlet-lista-predmeta-ir',
                component:ListaPredmetaIRComponent
            },
            {
                path:'/lista-predmeta-ostali',
                outlet:'outlet-lista-predmeta-ostali',
                component:ListaPredmetaOstaliComponent
            },
            {
                path:'/lista-predmeta-si',
                outlet:'outlet-lista-predmeta-si',
                component:ListaPredmetaSIComponent
            },
            {
                path:'/master',
                outlet:'outlet-master',
                component:MasterComponent
            },
            {
                path:'/naucni-projekti',
                outlet:'outlet-naucni-projekti',
                component:NaucniProjektiComponent
            },
            {
                path:'/projekti',
                outlet:'outlet-projekti',
                component:ProjektiComponent
            }
        ]
    }
];