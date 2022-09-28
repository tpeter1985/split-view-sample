import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateComponent } from './components/candidate/candidate/candidate.component';
import { DashboardComponent } from './components/dashboard.component';
import { EmptyComponent } from './components/empty.component';
import { JobsComponent } from './components/jobs.component';
import { NewCandidatesComponent } from './components/candidate/new-candidates/new-candidates.component';
import { NewVacancyComponent } from './components/new-vacancy.component';
import { TalentpoolComponent } from './components/talentpool.component';
import { CandidateCoreDataComponent } from './components/candidate/candidate-core-data/candidate-core-data.component';
import { CandidateDocumentsComponent } from './components/candidate/candidate-documents/candidate-documents.component';
import { CandidateAccessRightsComponent } from './components/candidate/candidate-access-rights/candidate-access-rights.component';
import { MyProcessesComponent } from './components/candidate/my-processes/my-processes.component';
import { CandidateDocumentComponent } from './components/candidate/candidate-document/candidate-document.component';

const candidateChildRoutes = [
  {
    path: 'core-data',
    component: CandidateCoreDataComponent,
  },
  {
    path: 'documents',
    component: CandidateDocumentsComponent,
  },
  {
    path: 'access-rights',
    component: CandidateAccessRightsComponent,
  },
  {
    path: 'document/:id',
    component: CandidateDocumentComponent,
  },
];

const appRoutes: Routes = [
  { path: 'empty', component: EmptyComponent },
  { path: 'start', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'talentpool', component: TalentpoolComponent },
  { path: 'new-vacancy', component: NewVacancyComponent },
  {
    path: 'new-candidates',
    component: NewCandidatesComponent,
  },
  {
    path: 'new-candidates/candidate',
    component: CandidateComponent,
    children: candidateChildRoutes,
  },
  {
    path: 'my-processes',
    component: MyProcessesComponent,
  },
  {
    path: 'my-processes/candidate',
    component: CandidateComponent,
    children: candidateChildRoutes,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        ...appRoutes.map( item => ({ ...item, outlet:'a' }) ),
        ...appRoutes.map( item => ({ ...item, outlet:'b' }) ),
        { path: '',   redirectTo: '/(a:start)', pathMatch: 'full' },
      ]
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}