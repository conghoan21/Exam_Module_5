import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book/book.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getAllBook();
  }
  // tslint:disable-next-line:typedef
  getAllBook(){
    this.bookService.getAllBook().subscribe(result => {
      this.books = result;
    }, error => console.log(error));
  }

}
