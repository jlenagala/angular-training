import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/service/user/user-data.service';
import { User } from '../list-users/list-users.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
id:number;
user:User;
  constructor(
    private userDataService:UserDataService,
    private route:ActivatedRoute,
    private router:Router

  ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(){
    this.id=this.route.snapshot.params['id'];
    //this.user=new User(1,"","","","","",",new Date());//default values to user object
    this.userDataService.fetchData(this.id).subscribe(
      data =>this.user = data
  );
  }
  saveUsers(){
    this.userDataService.updateData(this.user).subscribe(
      data =>{
        console.log(data);
          this.router.navigate(['users']);
      }
  );
}
}
