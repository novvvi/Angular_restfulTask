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
//    
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  messages: any[];
  thismsg: string;
  dis: string;


  constructor(private _httpService: HttpService){}

  ngOnInit() {
    // this.thismsg;
    // this.messages;
  }

  discription(i: number): void {
      this.dis = this.messages[i].description;
      console.log ( this.dis);
  }


  thismessage() {
    let tempObservable = this._httpService.getIndex();
    tempObservable.subscribe(data => {
      console.log("got our data!", data);
      this.thismsg = data[0].title;
      this.messages = data;
    });
  }
}
