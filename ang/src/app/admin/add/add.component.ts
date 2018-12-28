import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

import { DataService } from "../../shared/services/data.service";
import { ErrorService } from "../../shared/services/error.service";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"],
})
export class AddComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private errorService: ErrorService,
    private router: Router
  ) {}

  data: any;
  valid: any;
  color: boolean;
  message: boolean;
  error: string;
  movieForm: FormGroup;

  ngOnInit() {
    this.movieForm = this.fb.group({
      movie: ["", Validators.required],
      actors: [""],
      zanr: this.fb.group({
        akcija: [],
        drama: [],
        horor: [],
        komedija: [],
        triler: [],
        misterija: [],
        sf: [],
        fantasy: [],
        deciji: [],
        crtani: [],
        trid: [],
        ekstra: [],
        uskoro: [],
        nisam: [],
      }),
      ocena: ["0"],
      comentar: [""],
    });
  }

  onSubmit() {
    const form = {
      movie: this.movieForm.value.movie,
      actors: this.movieForm.value.actors,
      ocena: this.movieForm.value.ocena,
      komentar: this.movieForm.value.comentar,
      zanr: this.movieForm.value.zanr,
    };
    const search = { movieName: this.movieForm.value.movie };
    this.dataService.findMovie(search).subscribe(response => {
      this.valid = response;
      if (this.valid.success === false) {
        this.dataService.addMovie(form).subscribe(response => {
          this.data = response;
          if (this.data.success == true) {
            this.router.navigate(["/"]);
          }
        });
      } else {
        this.message = true;
        this.error = "Vec postoji film sa isitm nazivom";
        this.errorService.displayMessage().subscribe(response => {
          this.message = response.message;
          this.color = response.color;
        });
      }
    });
  }
}
