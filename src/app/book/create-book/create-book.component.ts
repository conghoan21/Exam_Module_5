import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book/book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  book: Book = {};

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  createBook(){
    this.bookService.createNewBook(this.book).subscribe(() => {
      console.log('Thành công');
    }, () => {
      console.log('Xảy ra lỗi');
    });  }

}
