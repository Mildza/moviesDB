import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

import { ReversePipe } from './pipes/reverse.pipe';
import { FilterPipe } from './pipes/filter.pipe';

import { DataService } from './services/data.service'

const appRoutes: Routes = [
  {path: '', component: HomeComponent}, 
  {path: 'home', component: HomeComponent},
  {path: 'all', component: HomeComponent},
  {path: 'cp', component: ControlPanelComponent},  
  {path: 'add', component: AddComponent},
  {path: 'edit', component: EditComponent},
  {path: 'delete', component: DeleteComponent},
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
    HeaderComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  
  providers: [
    DataService
  ],

  bootstrap: [AppComponent],
  
})
export class AppModule { }
