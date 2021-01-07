import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-create-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {
  book: Book = {};
  id: number;

  constructor(private bookService: BookService,
              private  activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = +paramMap.get('id');
      this.getBook(this.id);
    });
  }
  getBook(id) {
    this.bookService.getBookById(id).subscribe(value => {
      this.book = value;
    });
  }

}
