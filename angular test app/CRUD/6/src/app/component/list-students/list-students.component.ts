import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {
 student={
   id:1,
   firstName:'Janani',
   lastName:'Lenagala'
 }
  constructor() { }

  ngOnInit(): void {
  }

}
