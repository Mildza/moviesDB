import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'
import { EnableLog } from '../services/enableLog.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies:any
  numberOfMovies: number
  result
  search = '';
  pass : boolean = false
  
  constructor(
    private dataService:DataService,
    private enableLog: EnableLog
    ){}

  ngOnInit() {
    this.dataService.getAll()
    .subscribe(result => {
      this.movies = result
      this.numberOfMovies = this.movies.length
      }) 
  }

  onKey(event: any) {
    this.search = event.target.value;
  }

  check(result){
    this.numberOfMovies = result
  }

}
