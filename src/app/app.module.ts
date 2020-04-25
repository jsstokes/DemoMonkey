import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DemoViewComponent } from './demo-view/demo-view.component';
import { DemoListComponent } from './demo-list/demo-list.component';
import { DemoDetailsComponent } from './demo-details/demo-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DemoViewComponent,
    DemoListComponent,
    DemoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
