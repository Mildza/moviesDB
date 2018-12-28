import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { AdminRouting } from "./admin-routing.module";
import { AuthService } from "../shared/services/auth.service";
import { EnableLog } from "../shared/services/enableLog.service";

import { ControlPanelComponent } from "../admin/control-panel/control-panel.component";
import { AddComponent } from "../admin/add/add.component";
import { EditComponent } from "../admin/edit/edit.component";
import { DeleteComponent } from "../admin/delete/delete.component";

@NgModule({
  declarations: [ControlPanelComponent, AddComponent, EditComponent, DeleteComponent],
  providers: [AuthService, EnableLog],
  imports: [SharedModule, RouterModule, AdminRouting],
})
export class AdminModule {}
