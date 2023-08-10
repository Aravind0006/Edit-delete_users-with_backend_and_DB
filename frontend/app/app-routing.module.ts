import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'sign',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'add',component:AddComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
