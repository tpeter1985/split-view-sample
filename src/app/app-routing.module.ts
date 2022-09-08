import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './input/input.component';
import { JustTextComponent } from './just-text/just-text.component';

const appRoutes: Routes = [
  { path: 'input', component: InputComponent },
  { path: 'justText', component: JustTextComponent }
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