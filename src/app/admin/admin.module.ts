import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { MischellaneousComponent } from './mischellaneous/mischellaneous.component';
import { OthersComponent } from './others/others.component';


@NgModule({
  declarations: [MischellaneousComponent, OthersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
