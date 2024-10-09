import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'list', component: ListComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component:UserComponent},
  { path: '**', redirectTo: '/login' },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
