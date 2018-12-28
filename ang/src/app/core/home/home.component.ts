import { Component, OnInit } from "@angular/core";
import { DataService } from "../../shared/services/data.service";
import { trigger, state, style, animate, transition, keyframes } from "@angular/animations";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  animations: [
    trigger("list", [
      state(
        "start",
        style({
          opacity: 0,
          transform: "translateX(0)",
        })
      ),
      transition("void => *", [
        style({
          opacity: 0,
          transform: "scale(0.3)",
        }),
        animate(500),
      ]),
    ]),
    trigger("header", [
      transition("void => *", [
        animate(
          1500,
          keyframes([
            style({
              opacity: 0,
              transform: "translateY(-100px)",
              offset: 0,
            }),
            style({
              opacity: 0.5,
              transform: "translateY(0px)",
              offset: 0.6,
            }),
            style({
              opacity: 1,
              transform: "translateY(40px)",
              offset: 0.7,
            }),
            style({
              opacity: 1,
              transform: "translateY(0px)",
              offset: 0.8,
            }),
            style({
              opacity: 0.6,
              transform: "translateX(-10px)",
              offset: 0.85,
            }),
            style({
              opacity: 1,
              transform: "translateX(10px)",
              offset: 0.9,
            }),
            style({
              opacity: 0.6,
              transform: "translateX(-10px)",
              offset: 0.95,
            }),
            style({
              opacity: 1,
              transform: "translateX(0px)",
              offset: 1,
            }),
          ])
        ),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  movies: any;
  numberOfMovies: number;
  result;
  search = "";

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAll().subscribe(result => {
      this.movies = result;
      this.numberOfMovies = this.movies.length;
    });
  }

  onKey(event: any) {
    this.search = event.target.value;
  }

  check(result) {
    this.numberOfMovies = result;
  }
}
