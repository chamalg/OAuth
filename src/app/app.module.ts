import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

import { environment } from "../environments/environment";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ClientsComponent } from "./components/clients/clients.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { AddClientsComponent } from "./components/add-clients/add-clients.component";
import { EditClientsComponent } from "./components/edit-clients/edit-clients.component";
import { ClientDetailsComponent } from "./components/client-details/client-details.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AppRoutingModule } from ".//app-routing.module";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ClientService } from "./services/client.service";
import { AuthService } from "./services/auth.service";
import { SettingsService } from "./services/settings.service";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ClientsComponent,
    SidebarComponent,
    AddClientsComponent,
    EditClientsComponent,
    ClientDetailsComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    NotFoundComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, "clientPanel"),
    FlashMessagesModule.forRoot(),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    ClientService,
    AuthService,
    SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
