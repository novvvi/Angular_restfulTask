import { Component, OnInit  } from '@angular/core';
import { HttpService } from './http.service';


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
  movies: any;
  dis: string;
  newTask: any;
  editTask: any;
  toggleEditBool: boolean;
  passDescription: string;

  constructor(private _httpService: HttpService){}

  ngOnInit() {
    this.Movie();
    this.newTask = { title: "", description: "" };
    this.editTask = { title: "", description: "" };
    this.toggleEditBool = false;
  }

  description(i: number): void {
    this.dis = this.movies[i].description;
    console.log ( this.dis);
  }

  toggleEdit(i : number): void{
    this.toggleEditBool = true;
    this.editTask.title = this.movies[i].title;
    this.editTask.description = this.movies[i].description;
  }


  Movie() {
    let tempObservable = this._httpService.getIndex();
    tempObservable.subscribe(data => {
      console.log("got our data!", data);
      this.movies = data;
    });
  }

  toggleAppDescription(d : string): void {
    this.passDescription = d;
    console.log(this.passDescription)
  }

  onSubmit() {
    let observable = this._httpService.postIndex(this.newTask);
    observable.subscribe(data => {
      console.log("got our data!", data);
      this.newTask = { title: "", description: "" }
    });
    this.Movie();
  }

  onDelete(i: number) {
    console.log(i);
    let observable = this._httpService.deleteIndex(i);
    observable.subscribe(data => {
      console.log("got our data!", data);
    });
    this.Movie();
  }



  onEdit(): void {
    let observable = this._httpService.updateIndex(this.editTask);
    observable.subscribe(data => {
      console.log("got our data!", data);
      this.editTask = { title: "", description: "" }
    });
    this.toggleEditBool = false;
  }


}
