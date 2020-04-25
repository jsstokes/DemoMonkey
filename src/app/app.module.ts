import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DemoViewComponent } from './demo-view/demo-view.component';
import { DemoListComponent } from './demo-list/demo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DemoViewComponent,
    DemoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
