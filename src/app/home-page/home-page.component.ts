import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { OnlineshoppingService } from '../onlineshopping.service';
import { HomePageModel } from './home-page.model';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  closeResult = '';

  productlist : HomePageModel.ProductList[] = [];

  productdetails : HomePageModel.ProductDetails = {
    name: '',
    price:'',
    category: '',
    cover_image:'',
    description:'',
  }

  constructor(private modalService: NgbModal, private api : OnlineshoppingService) { }

  ngOnInit(): void {
    this.listproduct();
  }

  listproduct(){
    this.api.listProduct().subscribe((response : HomePageModel.ProductList[] | any )=>{
      console.log(response);
      this.productlist=response;
      console.log(this.productdetails);
    }, (error)=>{
      console.log(error);
    });
  }

  onReceiveMsgDelete(value :any){
    console.log(value);
    this.listproduct();
  }

  onReceiveMsgEdit(value :any){
    console.log(value);
    this.listproduct();
  }

  open(content : any) {
    this.modalService.open(content, {centered: true, size: 'xl'}).result.then((result) => {
      console.log('Close Modal 1');
      console.log(result);
      this.api.addProduct(result).subscribe((response : HomePageModel.ProductList[] | any ) =>{ 
        console.log(response);
        this.listproduct();
      },(error)=>{
        console.log(error);
      });
    }, (reason) => {
      console.log('Close Modal 2');
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  // onClickogin(){
  //   console.log(this.productdetails);
  // }

}
