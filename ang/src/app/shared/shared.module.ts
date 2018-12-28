import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";

import { DataService } from "./services/data.service";
import { ErrorService } from "./services/error.service";
import { EnableLog } from "./services/enableLog.service";
import { AuthService } from "./services/auth.service";

import { ReversePipe } from "./pipes/reverse.pipe";
import { FilterPipe } from "./pipes/filter.pipe";

@NgModule({
  declarations: [ReversePipe, FilterPipe],
  imports: [CommonModule],
  providers: [DataService, ErrorService, EnableLog, AuthService],
  exports: [CommonModule, ReactiveFormsModule, FormsModule, ReversePipe, FilterPipe],
})
export class SharedModule {}
