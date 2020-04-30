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


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'welcome/:name', component:WelcomeComponent,canActivate:[RouteGuardService]},
  {path:'student', component:ListStudentsComponent,canActivate:[RouteGuardService]},
  {path:'users', component:ListUsersComponent,canActivate:[RouteGuardService]},
  {path:'logout', component:LogoutComponent,canActivate:[RouteGuardService]},
  {path:'users/:id', component:UpdateUserComponent,canActivate:[RouteGuardService]},
  
  {path:'**',component:ErrorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
