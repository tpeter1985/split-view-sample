import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard.component';
import { EmptyComponent } from './components/empty.component';
import { JobsComponent } from './components/jobs.component';
import { SplitViewCommandCenterComponent } from './split-view/split-view-command-center/split-view-command-center.component';
import { SplitViewOutletComponent } from './split-view/split-view-outlet/split-view-outlet.component';

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
