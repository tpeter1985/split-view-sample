import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard.component';
import { EmptyComponent } from './components/empty.component';
import { JobsComponent } from './components/jobs.component';
import { NewVacancyComponent } from './components/new-vacancy.component';
import { TalentpoolComponent } from './components/talentpool.component';

const appRoutes: Routes = [
  { path: 'empty', component: EmptyComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'talentpool', component: TalentpoolComponent },
  { path: 'new-vacancy', component: NewVacancyComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        ...appRoutes.map( item => ({ ...item, outlet:'a' }) ),
        ...appRoutes.map( item => ({ ...item, outlet:'b' }) ),
      ]
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}