import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guard/auth-gard";

import { HomeComponent } from "./core/home/home.component";
import { LoginComponent } from "./core/login/login.component";

import { CustomPreloadingService } from "./shared/services/custom-preloading.service";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "all", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "login/:id", component: LoginComponent },
  //// Lazyloading /////
  //// { path: "cp", loadChildren: "./admin/admin.module#AdminModule", canActivate: [AuthGuard] },

  /////CustomPreloading//////
  { path: "cp", data: { preload: false }, loadChildren: "./admin/admin.module#AdminModule", canActivate: [AuthGuard] },
  { path: "404", component: HomeComponent },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  //// Eager /////
  // imports: [RouterModule.forRoot(appRoutes)]
  ////Preloading/////
  // imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
  ///// Custom Preloading /////
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: CustomPreloadingService })],

  providers: [AuthGuard, CustomPreloadingService],
  exports: [RouterModule],
})
export class AppRouting {}
