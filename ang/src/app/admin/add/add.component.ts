import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { DataService } from '../../services/data.service'


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private dataService:DataService
    ) { }

  ngOnInit() {
  }

  movieForm = this.fb.group({
    movie:['Purge', Validators.required],
    actors:['Niko'],
    zanr: this.fb.group({
        akcija:[],
        drama:[],
        horor:[],
        komedija:[],
        triler:[],
        misterija:[],
        sf:[],
        fantasy:[],
        deciji:[],
        crtani:[],
        trid:[],
        ekstra:[],
        uskoro:[],
        nisam:[]
    }),
    ocena:['0'],
    comentar:['Dobar film']
  })

  onSubmit() {
    const form = {
        movie :this.movieForm.value.movie,
        actors :this.movieForm.value.actors,
        ocena :this.movieForm.value.ocena,
        komentar :this.movieForm.value.comentar,
        zanr : this.getChecked(this.movieForm.value.zanr) 
    }
    this.dataService.addMovie(form)
    .subscribe(response => console.log(response))
  }

  getChecked(object){
    const entries = Object.entries(object)
    const zanr = []
    for (const key of entries) {
      if(key[1]) {
        if(key[0] =="trid") {
          key[0]="3d"
        } else if(key[0] =="nisam") {
          key[0]="-"
      } 
        zanr.push(key[0])
      }      
    }
    return zanr
  }
  
}
