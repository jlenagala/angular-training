import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/service/user/user-data.service';
import { User } from '../list-users/list-users.component';
import { ActivatedRoute } from '@angular/router';

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
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(){
    this.id=this.route.snapshot.params['id'];
    this.userDataService.updateData(this.id).subscribe(
      data =>this.user = data
  );
  }
  saveUsers(){

  }
}
