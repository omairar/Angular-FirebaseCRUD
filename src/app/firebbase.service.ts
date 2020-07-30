import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebbaseService {

  constructor(public afs: AngularFirestore) { }

  createUser(incRollNo, incName){
    return this.afs.collection('students').add({
      rollno: incRollNo,
      name: incName
    });
  }

  //READ 

  getUsers(){
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('students').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots)
      })
    })
  }

  

  //UPDATE

  updateUser(userKey, rno, name){
    //value.nameToSearch = value.name.toLowerCase();
    return this.afs.collection('students').doc(userKey).update({
      rollno: rno,
      name: name

    });
  }
  
  //DELETE

  deleteUser(userKey){
    return this.afs.collection('students').doc(userKey).delete();
  }

  searchUsers(searchValue){
    return this.afs.collection('students',ref => ref.where('rollno', '>=', searchValue)
      .where('rollno', '<=', searchValue + '\uf8ff'))
      .snapshotChanges()
  }
  
  searchUsersByAge(value){
    return this.afs.collection('students',ref =>
    ref.orderBy('rollno').startAt(value)).snapshotChanges();
   }
  
  
  
  
}
