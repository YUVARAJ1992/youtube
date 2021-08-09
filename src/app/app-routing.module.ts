import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component'
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { MochParentComponent } from './moch-parent/moch-parent.component'
import { GuardService } from './core-services/guard.service'


const routes: Routes = [
  {path: '', component:HomePageComponent},
  {path: 'login', component:LoginComponent },
  {path: 'users', component:UsersComponent},
  {
    path:'auth', loadChildren: () => import('./feature-module/auth/auth.module').then(module => module.AuthModule),
    canLoad: [GuardService]
  },
  {
    path:'register', loadChildren: () => import('./feature-module/register/register.module').then(module => module.RegisterModule)
  },
  {
    path:'settings', loadChildren: () => import('./feature-module/settings/settings.module').then(module => module.SettingsModule),
    canLoad: [GuardService]
  },
  {
    path:'moch', component:MochParentComponent,
    canActivate : [GuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy : PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
