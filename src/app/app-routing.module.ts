import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'login',
    loadChildren: () => import('./components/sign-in/sign-in.module')
      .then(mod => mod.SignInModule)
  },
  {
    path: 'pokedex',
    loadChildren: () => import('./components/pokedex/pokedex.module')
      .then(mod => mod.PokedexModule)
  },
  { path: '**', component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
