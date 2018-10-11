import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private dataService: DataService) { }

  movie:string
  data:any
  delInfo:any
  detect:boolean = false
  message: string

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
    .subscribe(result => this.delInfo = result)
  }

}
