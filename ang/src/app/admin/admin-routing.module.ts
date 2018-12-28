import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ControlPanelComponent } from "./control-panel/control-panel.component";
import { AddComponent } from "./add/add.component";
import { EditComponent } from "./edit/edit.component";
import { DeleteComponent } from "./delete/delete.component";

const appRoutes: Routes = [
  { path: "", component: ControlPanelComponent },
  { path: "add", component: AddComponent },
  { path: "edit", component: EditComponent },
  { path: "delete", component: DeleteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  providers: [],
  exports: [],
})
export class AdminRouting {}
