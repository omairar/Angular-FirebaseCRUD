import { Component, OnInit } from '@angular/core';
import {FirebbaseService} from '../firebbase.service'
import { Router, ActivatedRoute } from '@angular/router';
import { ToUpdateService } from '../to-update.service';
@Component({
  selector: 'app-view-stud',
  templateUrl: './view-stud.component.html',
  styleUrls: ['./view-stud.component.css']
})
export class ViewStudComponent implements OnInit {

  constructor(
    private firebaseService:FirebbaseService, 
    private rtr: Router, 
    private acr: ActivatedRoute,
    private tupdt: ToUpdateService) { }

  items: Array<any>;

  ngOnInit(): void {

    this.firebaseService.getUsers()
    .then(result => {
      this.items = result;
    })

  }

  UpdateSTUD(id,rno,name){
    console.log(id+" "+rno+" "+name);
    this.tupdt.setData(id,rno,name);
  }

  DeleteSTUD(id){
    console.log("id :" +id);
    this.firebaseService.deleteUser(id)
    .then(
      res => {
        this.rtr.navigate(['/view']);
      },
      err => {
        console.log(err);
      }
    )
  }

}
