import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import {AccountModule} from './account/account.module';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ArticlesModule } from './articles/articles.module';
import { StaticpagesModule } from './staticpages/staticpages.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ShowRideComponent } from './show-ride/show-ride.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PagenotfoundComponent,
    HomeComponent,
    LoginComponent,
    ShowRideComponent,
    
  ],
  imports: [
    BrowserModule,
    ArticlesModule,
    StaticpagesModule,
    AppRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    ReactiveFormsModule,
    HttpClientModule, 
    AngularEditorModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
