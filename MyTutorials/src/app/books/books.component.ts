import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books = [
    new Book(1,'Java Unleashed',false, new Date()),
    new Book(2,'C++ Programming',true, new Date()),
    new Book(3,'Angular JS Expert',true, new Date()),
    new Book(4,'CCNA Networking',false, new Date()),
    new Book(5,'IBM Blumix',false, new Date())
    // {id:1,description:'Java Unleashed'},
    // {id:2,description:'C++ Programming'},
    // {id:3,description:'Angular JS Expert'}
  ]

  // book = {
  //   id: 1,
  //   description: 'Java Programming Language'
  // }

  constructor() { }

  ngOnInit(): void {

  }

}

export class Book{
  constructor(
    public id: number,
    public description: String,
    public sold: boolean,
    public publishedDate: Date
  ){
   
  }
}
