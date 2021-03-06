import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WardrobeComponent } from './wardrobe/wardrobe.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AuthGuardService } from './services/auth-guard.service'; 

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'wardrobe', component: WardrobeComponent ,canActivate: [AuthGuardService]},
  { path: 'dashboard', component: DashboardComponent ,canActivate: [AuthGuardService]},
  { path: 'favorites', component: FavoritesComponent ,canActivate: [AuthGuardService]},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
