import { FirebbaseService } from './../firebbase.service';
import { Component, OnInit } from '@angular/core';
import { ToUpdateService } from '../to-update.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-stud',
  templateUrl: './update-stud.component.html',
  styleUrls: ['./update-stud.component.css']
})
export class UpdateStudComponent implements OnInit {

  constructor(private fs: FirebbaseService, private tupdt: ToUpdateService, private rtr: Router) { }

  ngOnInit(): void {
    this.id = this.tupdt.id;
    this.rollno = this.tupdt.rno;
    this.name = this.tupdt.name;
  }

  id: string
  rollno: string;
  name: string;

  value:{
    rollno: string,
    name: string
  }

  updateStudent(){

    this.fs.updateUser(this.id, this.rollno, this.name)
    console.log(this.rollno+" "+this.name)
    
  }

}
