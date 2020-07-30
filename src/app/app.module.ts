import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AddStudComponent } from './add-stud/add-stud.component';
import { ViewStudComponent } from './view-stud/view-stud.component';
import { UpdateStudComponent } from './update-stud/update-stud.component';
import { DeleteStudComponent } from './delete-stud/delete-stud.component';
import { SearchStudComponent } from './search-stud/search-stud.component'

import {ToUpdateService} from './to-update.service';


@NgModule({
  declarations: [
    AppComponent,
    AddStudComponent,
    ViewStudComponent,
    UpdateStudComponent,
    DeleteStudComponent,
    SearchStudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
 	  AngularFirestoreModule,
  ],
  providers: [ToUpdateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
