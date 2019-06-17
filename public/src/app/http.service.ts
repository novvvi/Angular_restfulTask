import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private _http: HttpClient){
  }

  getTasks(){
    let tempObservable = this._http.get('/task');
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }

  getIndex(){
    return this._http.get('/movie');
  }

  postIndex(newtask){
    return this._http.post("/create", newtask);
  }

  updateIndex(edittask){
    return this._http.put("/update", edittask);
  }

  deleteIndex(index){
    return this._http.delete(`/delete/${index}`);
  }

  // getPokemon(){
  //   let mew = this._http.get('https://pokeapi.co/api/v2/pokemon/mew/');
  //   mew.subscribe(data => {
  //     console.log("mew weight:", data.weight)
  //     var typeURL = data.types[0].type.url;
  //     var abilitiesURL = data.abilities[0].ability.url
      
  //     let typethis = this._http.get(typeURL);
  //     typethis.subscribe(data1 => {
  //       console.log(data1);
  //     });
      
  //     let pokemon = this._http.get(abilitiesURL);
  //     pokemon.subscribe(data => {
  //       console.log(`There are ${data["pokemon"].length} pokemon has the same ability as mew`);
  //     });
  //   });
  // };
}
