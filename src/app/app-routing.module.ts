import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import { AboutUsComponent } from './staticpages/about-us/about-us.component';
import { ContactUsComponent } from './staticpages/contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ShowRideComponent } from './show-ride/show-ride.component';
const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
{path:'about-us',component:AboutUsComponent},
{path:'contact-us',component:ContactUsComponent},
{path:'login',component:LoginComponent},
{path:'show-ride',component:ShowRideComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
