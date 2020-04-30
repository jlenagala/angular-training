import { Component, OnInit } from '@angular/core';

export class User{
  constructor(
  public id: number,
  public firstName: string,
  public lastName: string,
  public email:string,
  public regDate:Date
){

}
}
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users=[
    new User(1,'Janani','Lenagala','jan@gamil.com',new Date()),
    new User(2,'Aaaa','ssss','jasaan@gamil.com',new Date()),
    new User(3,'vvvvv','ttttt','vtvt@gamil.com',new Date())
  
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
