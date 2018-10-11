import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {  }


  getAll() {
    return this.http.get('http://localhost:3000/all');
  }

  addMovie(form) {
    return this.http.post('http://localhost:3000/add', form)
  }

  findMovie(movie) {
    return this.http.post('http://localhost:3000/find', movie)
  }

  deleteMovie(id){
    console.log(id)
    const url = `http://localhost:3000/delete/${id}`
    return this.http.delete(url, id)
  }

}