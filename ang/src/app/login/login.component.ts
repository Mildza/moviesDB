import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { DataService } from '../services/data.service'
import { AuthService } from '../services/auth.service';
import { EnableLog } from '../services/enableLog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user
  fb
  username:string
  pass:string
  data
  
  constructor(
    private route:ActivatedRoute,
    private dataService:DataService,
    private authService:AuthService,
    private enableLog: EnableLog,
    private router: Router
  ) { 
    
    const id = this.route.snapshot.params['id']
    if(id) this.authService.storeUserData(id)
     
    const fb = this.authService.getFb()
    if(fb){
      this.dataService.getFbUser(fb)
      .subscribe(user => {
        this.user = user;
        this.enableLog.clicked(true)
        this.authService.loggedIn()
      })
    }
  }

  ngOnInit() {
  }

  checkUser(){
    const userLogs = { username: this.username, password: this.pass }
    this.dataService.checkUser(userLogs)
    .subscribe(data => {
      this.data = data
      if(this.data.success){
      this.authService.storeToken(this.data.user, this.data.token)
      this.enableLog.clicked(true)
      this.router.navigate(['/cp']);
      }
    })
  }
}
