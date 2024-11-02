import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';//routing
import { AppRoutingModule } from './app.routes';//routing
import { MatDialogModule } from '@angular/material/dialog';//dialog
import { DialogContentComponent } from './dialog-content/dialog-content.component';//دیولگ
import { MatButtonModule } from '@angular/material/button';//دکمه دیالوگ
import { FormsModule } from '@angular/forms';//ng moudle دو طرفه 
import { MatIconModule } from "@angular/material/icon";//icon




@NgModule({
  declarations: [
    AppComponent,DialogContentComponent

  ],
  imports: [
    BrowserModule,RouterModule,AppRoutingModule,MatDialogModule,MatButtonModule,FormsModule,MatIconModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
