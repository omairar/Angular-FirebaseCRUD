import { Component, OnInit } from '@angular/core';
import {FirebbaseService} from '../firebbase.service'

@Component({
  selector: 'app-add-stud',
  templateUrl: './add-stud.component.html',
  styleUrls: ['./add-stud.component.css']
})
export class AddStudComponent implements OnInit {

  constructor(private fs: FirebbaseService) { }

  ngOnInit(): void {
  }

  rollno: string;
  name: string;

  createStudent(){
    this.fs.createUser(this.rollno, this.name);
    console.log(this.rollno+" "+this.name)
  }
}
