import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InputComponent } from './input/input.component';
import { JobsComponent } from './jobs.component';
import { JustTextComponent } from './just-text/just-text.component';
import { NewVacancyComponent } from './new-vacancy.component';
import { TalentpoolComponent } from './talentpool.component';

const appRoutes: Routes = [
  // { path: 'input', component: InputComponent },
  // { path: 'justText', component: JustTextComponent },
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
      ],
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}