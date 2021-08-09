import { Component, OnInit } from '@angular/core';
import { HeaderSampleModel } from './headersample.model'

@Component({
  selector: 'app-headersample',
  templateUrl: './headersample.component.html',
  styleUrls: ['./headersample.component.css']
})
export class HeadersampleComponent implements OnInit {

  userData : HeaderSampleModel.UserData =  {
    username : '',
    emailID : '',
    password : '',
  }

  studentList : HeaderSampleModel.StudentList = {
    name : 'student1',
    age : 13,
    }

  productdetails : HeaderSampleModel.ProductDetails = {
      name: '',
      price:'',
      category: '',
      cover_image:'',
      description:'',
    }


  constructor() { }

  ngOnInit(): void {
  }

}
