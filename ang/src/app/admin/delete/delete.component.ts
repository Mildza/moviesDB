import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../../services/data.service'


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private router:Router
    ) {}

  movie:string
  data:any
  delInfo:any
  detect:boolean = false
  message: string
  color:boolean

  ngOnInit() {
  }

  searchMovie(){
    const search = {movieName:this.movie}
    this.dataService.findMovie(search)
    .subscribe(result => {
        this.data = result
      if(this.data.success === false){
        this.detect = false
        this.message = this.data.msg
      } else {
        this.detect = true
        this.message = ""
      }
    })
  }

  onKey(event: any) {
    this.message = "";
  }
    
  delete(){
    this.dataService.deleteMovie(this.data._id)
    .subscribe(result => {
      this.delInfo = result;
      if(this.delInfo.success==true){
        this.router.navigate(['/'])
      }
    })
  }

}
