import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http'; 
import {RouterModule, Routes} from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ControlPanelComponent } from './admin/control-panel/control-panel.component';
import { AddComponent } from './admin/add/add.component';
import { EditComponent } from './admin/edit/edit.component';
import { DeleteComponent } from './admin/delete/delete.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

import { ReversePipe } from './pipes/reverse.pipe';
import { FilterPipe } from './pipes/filter.pipe';

import { DataService } from './services/data.service'
import { ErrorService } from './services/error.service'
import { EnableLog } from './services/enableLog.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guard/auth-gard';


const appRoutes: Routes = [
  {path: '', component: HomeComponent}, 
  {path: 'home', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'all', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login/:id', component: LoginComponent},
  {path: 'cp', component: ControlPanelComponent, canActivate:[AuthGuard]},  
  {path: 'add', component: AddComponent, canActivate:[AuthGuard]},
  {path: 'edit', component: EditComponent, canActivate:[AuthGuard]},
  {path: 'delete', component: DeleteComponent, canActivate:[AuthGuard]},
  {path: '404', component: HomeComponent},
  {path: '**',redirectTo: '/404'}   
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReversePipe,
    FilterPipe,
    ControlPanelComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    HeaderComponent,
    LoginComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  
  providers: [
    DataService,
    ErrorService,
    EnableLog,
    AuthService,
    AuthGuard
  ],

  bootstrap: [AppComponent],
  
})
export class AppModule { }
