import { Component, OnInit } from '@angular/core';
import { OnlineshoppingService } from '../onlineshopping.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userList : any = [];
  resourceList : any = [];
  display = false;


  constructor(private http : OnlineshoppingService ) { }

  login = {};

  ngOnInit(): void {
  }

  // hide(){
  //   this.display = false;
  // }
  // show(){
  //   this.display = true;
  // }



  onLoadUser(){
    this.http.listUser().subscribe((response : any)=>{
      console.log(response.data);
      this.userList=response.data;
      console.log(this.userList);
    }, (error)=>{
      console.log(error);
    });
  }

  // onLoadSingleUser(){
  //   this.http.getSingleUser().subscribe((response)=>{
  //     console.log(response);
  //   },(error)=>{
  //     console.log(error);
  //   });
  // }

  // onListResource(){
  //   this.http.getListUser().subscribe((response : any)=>{
  //     console.log(response.data);
  //     this.resourceList=response.data;
  //   },(error)=>{
  //     console.log(error);
  //   });
  // }

  // onDeleteData(){
  //   this.http.deleteUserList().subscribe((response)=>{
  //     console.log(response);
  //   },(error)=>{
  //     console.log(error);
  //   });
  // }
}
