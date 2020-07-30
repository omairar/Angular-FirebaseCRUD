import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToUpdateService {
  id: string;
  rno: string;
  name: string;

  constructor() { }

  setData(incId, incRno, incName){
    this.id = incId;
    this.rno = incRno;
    this.name = incName
  }

  
}
