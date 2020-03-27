import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeUserComponent } from './liste-user/liste-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CreateRoleComponent } from './create-role/create-role.component';
import { ListeRoleComponent } from './liste-role/liste-role.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ListeCompteComponent } from './liste-compte/liste-compte.component';
import { CreateCompteComponent } from './create-compte/create-compte.component';
import { UpdateCompteComponent } from './update-compte/update-compte.component';
import { ListeOperationsComponent } from './liste-operations/liste-operations.component';
import { CreateoperationComponent } from './createoperation/createoperation.component';
import { CompteByuserComponent } from './compte-byuser/compte-byuser.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {path:"user",
component : ListeUserComponent},
{
  path:"user/save",
  component : CreateUserComponent
},
{
  path:"home",
  component : HomeComponent
},
{
  path:"role/save",
  component : CreateRoleComponent
},
{
  path:"role",
  component : ListeRoleComponent
},
{
  path:"user/update/:id",
  component : UpdateUserComponent
},
{
  path:"compte",
  component : ListeCompteComponent
},
{
  path:"compte/save",
  component : CreateCompteComponent
},
{
  path:"compte/update/:id",
  component : UpdateCompteComponent,
  canActivate : [AuthGuardService]
},
{
  path:"operations",
  component : ListeOperationsComponent
},
{
  path:"operations/save",
  component : CreateoperationComponent
},
{
  path:"compte/byid/:id",
  component : ListeOperationsComponent
},
{
  path:"user/byid/:id",
  component : CompteByuserComponent
},
{
  path:"user/login",
  component : LoginComponent
},







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
