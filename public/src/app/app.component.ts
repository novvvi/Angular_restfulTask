import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app';
//    constructor(private _httpService: HttpService){}
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  messages: string[];
  thisMessage: string;


  ngOnInit() {
    this.messages = ['learn Angular', "Manipulate", "Bind events"];
    this.thisMessage = "this will be at input";
  }
}
