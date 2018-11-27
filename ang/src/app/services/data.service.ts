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

  updateMovie(movie) {
    return this.http.post('http://localhost:3000/update', movie)
  }

  deleteMovie(id){
    const url = `http://localhost:3000/delete/${id}`
    return this.http.delete(url, id)
  }

  getFbUser(id){
    return this.http.get('http://localhost:3000/user/fb/'+ id)
  }

  checkUser(user){
    return this.http.post('http://localhost:3000/admin/pass', user)
  }

  logOut(){ 
    localStorage.removeItem('fb')
    localStorage.removeItem('user')
    localStorage.clear()          
    return this.http.get('http://localhost:3000/user/logout')
  }


}
