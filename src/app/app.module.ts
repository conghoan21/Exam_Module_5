import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateBookComponent } from './book/create-book/create-book.component';
import { DeleteBookComponent } from './book/delete-book/delete-book.component';
import { ListBookComponent } from './book/list-book/list-book.component';
import { UpdateBookComponent } from './book/update-book/update-book.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './approuting.module';
import {HttpClientModule} from '@angular/common/http';
import {DetailBookComponent} from './book/detail-book/detail-book.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateBookComponent,
    DeleteBookComponent,
    ListBookComponent,
    UpdateBookComponent,
    DetailBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
