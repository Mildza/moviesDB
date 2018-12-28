import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./login/login.component";

import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [HomeComponent, HeaderComponent, LoginComponent],
  imports: [SharedModule, RouterModule],
  providers: [],
  exports: [HomeComponent, HeaderComponent],
})
export class CoreModule {}
