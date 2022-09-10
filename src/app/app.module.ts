import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { InputComponent } from './input/input.component';
import { JobsComponent } from './jobs.component';
import { JustTextComponent } from './just-text/just-text.component';
import { SplitViewCommandCenterComponent } from './split-view-command-center/split-view-command-center.component';
import { SplitViewOutletComponent } from './split-view-outlet/split-view-outlet.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    JustTextComponent,
    DashboardComponent,
    JobsComponent,
    SplitViewCommandCenterComponent,
    SplitViewOutletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
