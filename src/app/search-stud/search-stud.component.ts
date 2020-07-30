import { FirebbaseService } from './../firebbase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-stud',
  templateUrl: './search-stud.component.html',
  styleUrls: ['./search-stud.component.css']
})
export class SearchStudComponent implements OnInit {
  combineLists: any;

  constructor(private fs: FirebbaseService) { }

  ngOnInit(): void {
  }

  rollno: string;
  //name: string;

  items=[];
  
  age_filtered_items=[]
  name_filtered_items=[]

  searchStudent(){
    //this.fs.createUser(this.rollno, this.name);

    
  this.fs.searchUsers(this.rollno)
  .subscribe(result => {
    this.name_filtered_items = result;
   // this.items = this.combineLists(result, this.age_filtered_items);
  })


    console.log(this.rollno)
  }

}
