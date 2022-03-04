import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddgroundComponent } from './components/addground/addground.component';
import { EditgroundComponent } from './components/editground/editground.component';
import { AddadminComponent } from './components/addadmin/addadmin.component';
import { EditgrdComponent } from './components/editground/editgrd/editgrd.component';

const routes: Routes = [
  {path: '',component: AdminDashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'addadmin', component: AddadminComponent },
      { path: 'addground', component: AddgroundComponent },
      { path: 'editground', component: EditgroundComponent },
      { path: 'editgrd', component: EditgrdComponent },
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}