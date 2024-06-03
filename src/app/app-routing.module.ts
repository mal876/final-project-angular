import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TreatementComponent } from './pages/treatement/treatement.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AllRecordsComponent } from './pages/all-records/all-records.component';
import { AddRecordComponent } from './pages/add-record/add-record.component';
import { DeleteRecordComponent } from './pages/delete-record/delete-record.component';
import { UpdateRecordComponent } from './pages/update-record/update-record.component';
import { GetRecordByIdComponent } from './pages/get-record-by-id/get-record-by-id.component';
import { GaurdianGuard } from './auth/gaurdian.guard';

const routes: Routes = [
  {path: 'home', title: 'Home Page', component: HomeComponent, pathMatch: 'full'},
  {path: 'about', title: 'About', component: AboutComponent},
  {path: 'treatment', title: 'Treatment & Services', component: TreatementComponent},
  {path: 'contact', title: 'Contact', component: ContactComponent},
  {path: 'login', title: 'Login', component: LoginPageComponent},
  {path: 'profile', title: 'Online', component: ProfileComponent},
  {path: 'records', title: 'All Records', component: AllRecordsComponent, canActivate: [GaurdianGuard]},
  {path: 'add', title: 'Add New Record', component: AddRecordComponent},
  {path: 'delete/:id', title: 'Delete Record', component: DeleteRecordComponent},
  {path: 'update/:id', title: 'Update Record', component: UpdateRecordComponent},
  {path: 'view/:id', title: 'Viewing', component: GetRecordByIdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
