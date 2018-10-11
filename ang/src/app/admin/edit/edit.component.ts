import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { DataService } from '../../services/data.service'


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private dataService:DataService
  ) { }

data:any
movie:string
temp:any
  ngOnInit() {

  }


  movieForm = this.fb.group({
    naziv:['', Validators.required],
    glumci:[''],
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
    ocena:[''],
    komentar:['']
  })

  searchMovie(){
    const search = {movieName:this.movie}
    this.dataService.findMovie(search)
    .subscribe(result => {
        this.data = result
        this.temp = this.data.zanr
        this.movieForm.patchValue({
          naziv: this.data.naziv,
          glumci: this.data.glumci,
          ocena: this.data.ocena,
          komentar: this.data.utisak,
          zanr: this.data.zanr
       }); 
    })
    this.movieForm.updateOn
  }



  onSubmit() {
    const form = {
        movie :this.movieForm.value.naziv,
        actors :this.movieForm.value.glumci,
        ocena :this.movieForm.value.ocena,
        komentar :this.movieForm.value.komentar,
        // zanr : this.makeArray(this.movieForm.value.zanr) 
    }
    console.log(form)
    this.dataService.addMovie(form)
    .subscribe(response => console.log(response))
  }


  // makeArray(object){
  //   const entries = Object.entries(object)
  //   const zanr = []
  //   for (const key of entries) {
  //     if(key[1]) {
  //       if(key[0] =="trid") {
  //         key[0]="3d"
  //       } else if(key[0] =="nisam") {
  //         key[0]="-"
  //     } 
  //       zanr.push(key[0])
  //     }      
  //   }
  //   return zanr
  // }

  checkFunction(a){
    console.log(a)
    if(a=="akcija"){
      return true
    }
    else if(a=="sf"){
      return
    }
    else{
      return false
    }
  }

}
