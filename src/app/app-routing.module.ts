import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WardrobeComponent } from './wardrobe/wardrobe.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AuthGuardService } from './services/auth-guard.service'; 
import { CombinatorComponent } from './combinator/combinator.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent ,canActivate: [AuthGuardService]},
  { path: 'wardrobe', component: WardrobeComponent ,canActivate: [AuthGuardService]},
  { path: 'dashboard', component: DashboardComponent ,canActivate: [AuthGuardService]},
  { path: 'favorites', component: FavoritesComponent ,canActivate: [AuthGuardService]},
  { path: 'combinator', component: CombinatorComponent ,canActivate: [AuthGuardService]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
