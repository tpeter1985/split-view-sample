import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { EmptyComponent } from './empty.component';
import { JobsComponent } from './jobs.component';
import { NewVacancyComponent } from './new-vacancy.component';
import { TalentpoolComponent } from './talentpool.component';

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