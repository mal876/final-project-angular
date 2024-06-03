import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TreatementComponent } from './pages/treatement/treatement.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HeaderComponent } from './pages/partials/header/header.component';
import { FooterComponent } from './pages/partials/footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AllRecordsComponent } from './pages/all-records/all-records.component';
import { AddRecordComponent } from './pages/add-record/add-record.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DeleteRecordComponent } from './pages/delete-record/delete-record.component';
import { UpdateRecordComponent } from './pages/update-record/update-record.component';
import { GetRecordByIdComponent } from './pages/get-record-by-id/get-record-by-id.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TreatementComponent,
    ContactComponent,
    LoginPageComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    ProfileComponent,
    AllRecordsComponent,
    AddRecordComponent,
    DeleteRecordComponent,
    UpdateRecordComponent,
    GetRecordByIdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
