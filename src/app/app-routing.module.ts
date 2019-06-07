import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
 // {path: 'home', component: HomeComponent , canActivate: [AuthGuard] },
   {path: 'home', component: HomeComponent },
  {path: 'profile/:id', component: ProfileComponent},
 // {path: 'profile/:id', component: ProfileComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
