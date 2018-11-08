import { Component, OnInit } from '@angular/core';
import { EnableLog } from '../services/enableLog.service'
import { DataService } from '../services/data.service'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
 
  logged:boolean = false


    
    constructor(
      private enableLog: EnableLog,
      private dataService: DataService
      ) { 
    this.enableLog.showLogin().subscribe( val => this.logged = val)
  }

  ngOnInit() {
    
  }

  logout(){
    this.dataService.logOut()
    this.enableLog.clicked(false)
  }

}
