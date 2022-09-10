import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { EmptyComponent } from './empty.component';
import { JobsComponent } from './jobs.component';
import { SplitViewCommandCenterComponent } from './split-view-command-center/split-view-command-center.component';
import { SplitViewOutletComponent } from './split-view-outlet/split-view-outlet.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    JobsComponent,
    SplitViewCommandCenterComponent,
    SplitViewOutletComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
