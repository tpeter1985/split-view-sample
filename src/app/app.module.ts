import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateAccessRightsComponent } from './components/candidate/candidate-access-rights/candidate-access-rights.component';
import { CandidateCoreDataComponent } from './components/candidate/candidate-core-data/candidate-core-data.component';
import { CandidateDocumentComponent } from './components/candidate/candidate-document/candidate-document.component';
import { CandidateDocumentsComponent } from './components/candidate/candidate-documents/candidate-documents.component';
import { CandidateComponent } from './components/candidate/candidate/candidate.component';
import { MyProcessesComponent } from './components/candidate/my-processes/my-processes.component';
import { NewCandidatesComponent } from './components/candidate/new-candidates/new-candidates.component';
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
    EmptyComponent,
    NewCandidatesComponent,
    CandidateComponent,
    CandidateAccessRightsComponent,
    CandidateCoreDataComponent,
    CandidateDocumentsComponent,
    MyProcessesComponent,
    CandidateDocumentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
