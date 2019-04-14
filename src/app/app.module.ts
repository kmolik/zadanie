import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './lib/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './content/form/form.component';
import { FooterComponent } from './footer/footer.component';
import { PersonalComponent } from './content/personal/personal.component';
import { PicGridComponent } from './content/pic-grid/pic-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormComponent,
    FooterComponent,
    PersonalComponent,
    PicGridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
