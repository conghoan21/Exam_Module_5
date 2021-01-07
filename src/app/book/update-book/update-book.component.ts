import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  book: Book = {};
  id: number;

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = +paramMap.get('id');
      this.getBook(this.id);
    });

  }

  ngOnInit(): void {
  }

  getBook(id) {
    this.bookService.getBookById(id).subscribe(value => {
      this.book = value;
    });
  }

  // tslint:disable-next-line:typedef
  updateBook(id) {
    this.bookService.updateProduct(id, this.book).subscribe(() => {
      console.log('Thành công');
    }, () => {
      console.log('Xảy ra lỗi');
    });
  }

}
