import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeUserComponent } from './liste-user/liste-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CreateRoleComponent } from './create-role/create-role.component';
import { ListeRoleComponent } from './liste-role/liste-role.component';

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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
