import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { ErrorComponent } from './component/error/error.component';
import { ListStudentsComponent } from './component/list-students/list-students.component';
import { ListUsersComponent } from './component/user/list-users/list-users.component';
import { LogoutComponent } from './component/logout/logout.component';
import { RouteGuardService } from './service/routeService/route-guard.service';
import { UpdateUserComponent } from './component/user/update-user/update-user.component';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { ProfileComponent } from './component/profile/profile.component';
import { BoardUserComponent } from './component/board-user/board-user.component';
import { BoardModeratorComponent } from './component/board-moderator/board-moderator.component';
import { BoardAdminComponent } from './component/board-admin/board-admin.component';
import { LogingComponent } from './component/loging/loging.component';


const routes: Routes = [
  {path:'',component:LogingComponent},
  {path:'login',component:LogingComponent},
  {path:'welcome/:name', component:WelcomeComponent,canActivate:[RouteGuardService]},
  {path:'student', component:ListStudentsComponent,canActivate:[RouteGuardService]},
  {path:'users', component:ListUsersComponent,canActivate:[RouteGuardService]},
  {path:'logout', component:LogoutComponent,canActivate:[RouteGuardService]},
  {path:'users/:id', component:UpdateUserComponent,canActivate:[RouteGuardService]},
  
  { path: 'home', component: HomeComponent },
  //{ path: 'loging', component:LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  {path:'**',component:ErrorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
