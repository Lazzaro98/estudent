import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router'

import {DashboardNeregistrovaniRoutes} from './dashboard-neregistrovani.routes'
import { DashboardNeregistrovaniComponent } from './dashboard-neregistrovani.component';

@NgModule({
    imports: [RouterModule.forChild(DashboardNeregistrovaniRoutes)],
    exports:[RouterModule]
})
export class DashboardNeregistrovaniModule{
    
}