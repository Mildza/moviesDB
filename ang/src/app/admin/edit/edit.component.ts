import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

import { DataService } from "../../shared/services/data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"],
})
export class EditComponent implements OnInit {
  constructor(private fb: FormBuilder, private dataService: DataService, private router: Router) {}

  data: any;
  data2: any;
  movie: string;
  temp: any;
  detect: boolean = false;
  message: string;
  id: string;

  genre = {
    akcija: false,
    drama: false,
    horor: false,
    komedija: false,
    triler: false,
    misterija: false,
    sf: false,
    fantasy: false,
    deciji: false,
    crtani: false,
    trid: false,
    ekstra: false,
    uskoro: false,
    nisam: false,
  };

  ngOnInit() {}

  movieForm = this.fb.group({
    naziv: ["", Validators.required],
    glumci: [""],
    zanr: this.fb.group({
      akcija: [false],
      drama: [false],
      horor: [false],
      komedija: [false],
      triler: [false],
      misterija: [false],
      sf: [false],
      fantasy: [false],
      deciji: [false],
      crtani: [false],
      trid: [false],
      ekstra: [false],
      uskoro: [false],
      nisam: [false],
    }),
    ocena: [""],
    komentar: [""],
  });

  searchMovie() {
    this.reset();
    const search = { movieName: this.movie };
    this.dataService.findMovie(search).subscribe(result => {
      this.data = result;
      if (this.data.success === false) {
        console.log("ne postoji");
        this.detect = false;
        this.message = this.data.msg;
      } else {
        this.detect = true;
        this.message = "";
        this.temp = this.data.zanr;
        this.id = this.data._id;
        this.movieForm.patchValue({
          naziv: this.data.naziv,
          glumci: this.data.glumci,
          ocena: this.data.ocena,
          komentar: this.data.utisak,
          zanr: this.checkFunction(this.temp),
        });
      }
    });
  }

  onSubmit() {
    const form = {
      naziv: this.movieForm.value.naziv,
      glumci: this.movieForm.value.glumci,
      ocena: this.movieForm.value.ocena,
      komentar: this.movieForm.value.komentar,
      zanr: this.makeArray(this.movieForm.value.zanr),
      id: this.id,
    };

    this.dataService.updateMovie(form).subscribe(response => {
      this.data2 = response;
      if (this.data2.success == true) {
        this.router.navigate(["/"]);
      } else if (this.data2.success == false) {
        console.log(this.data2.msg);
      }
    });
  }

  checkFunction(arr) {
    if (arr) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "akcija") {
          this.genre.akcija = true;
        } else if (arr[i] == "drama") {
          this.genre.drama = true;
        } else if (arr[i] === "horor") {
          this.genre.horor = true;
        } else if (arr[i] === "komedija") {
          this.genre.komedija = true;
        } else if (arr[i] === "triler") {
          this.genre.triler = true;
        } else if (arr[i] === "misterija") {
          this.genre.misterija = true;
        } else if (arr[i] === "sf") {
          this.genre.sf = true;
        } else if (arr[i] === "fantasy") {
          this.genre.fantasy = true;
        } else if (arr[i] === "deciji") {
          this.genre.deciji = true;
        } else if (arr[i] === "crtani") {
          this.genre.crtani = true;
        } else if (arr[i] === "trid") {
          this.genre.trid = true;
        } else if (arr[i] === "ekstra") {
          this.genre.ekstra = true;
        } else if (arr[i] === "uskoro") {
          this.genre.uskoro = true;
        } else if (arr[i] === "nisam") {
          this.genre.nisam = true;
        }
      }
      return this.genre;
    }
  }

  reset() {
    this.movieForm.reset();
    this.genre = {
      akcija: false,
      drama: false,
      horor: false,
      komedija: false,
      triler: false,
      misterija: false,
      sf: false,
      fantasy: false,
      deciji: false,
      crtani: false,
      trid: false,
      ekstra: false,
      uskoro: false,
      nisam: false,
    };
  }

  makeArray(object) {
    const entries = Object.entries(object);
    const zanr = [];
    for (let key of entries) {
      let x;
      if (key[1]) {
        if (key[0] == "trid") {
          x = "3d";
        } else if (key[0] == "nisam") {
          x = "-";
        } else x = key[0];
        zanr.push(x);
      }
    }
    return zanr;
  }
}
