import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateBookComponent} from './book/create-book/create-book.component';
import {ListBookComponent} from './book/list-book/list-book.component';
import {UpdateBookComponent} from './book/update-book/update-book.component';
import {DeleteBookComponent} from './book/delete-book/delete-book.component';
import {DetailBookComponent} from './book/detail-book/detail-book.component';
const routes: Routes = [
  {
    path: 'create-book',
    component: CreateBookComponent
  }, {
    path: 'list-book',
    component: ListBookComponent
  }, {
    path: 'update-book/:id',
    component: UpdateBookComponent
  }, {
    path: 'delete-book/:id',
    component: DeleteBookComponent
  },
  {
    path: 'detail-book/:id',
    component: DetailBookComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
