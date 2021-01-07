import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
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

  deleteBook(id) {
    this.bookService.deleteBookById(id).subscribe(() => {
        alert('Xoá thành công');
        this.router.navigate(['/list-book']);
      },
      error => console.log(error));
  }
}
