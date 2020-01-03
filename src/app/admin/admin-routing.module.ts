import { Routes } from '@angular/router';
import { RouterModule } from  '@angular/router';

import { MischellaneousComponent } from './mischellaneous/mischellaneous.component';
import { OthersComponent } from './others/others.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', component: MischellaneousComponent },
    { path: 'others', component: OthersComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }