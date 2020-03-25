import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeUserComponent } from './liste-user/liste-user.component';
import { ListeCompteComponent } from './liste-compte/liste-compte.component';
import { ListeOperationsComponent } from './liste-operations/liste-operations.component';
import { ListeRoleComponent } from './liste-role/liste-role.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateCompteComponent } from './create-compte/create-compte.component';
import { CreateoperationComponent } from './createoperation/createoperation.component';
import { CreateRoleComponent } from './create-role/create-role.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeUserComponent,
    ListeCompteComponent,
    ListeOperationsComponent,
    ListeRoleComponent,
    CreateUserComponent,
    CreateCompteComponent,
    CreateoperationComponent,
    CreateRoleComponent,
    HeaderComponent,
    HomeComponent
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
