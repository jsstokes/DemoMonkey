import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoViewComponent } from "./demo-view/demo-view.component";


const routes: Routes = [
  {path: '', component: DemoViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
