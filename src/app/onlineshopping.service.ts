import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OnlineshoppingService {

  baseUrl = "https://vcentry.herokuapp.com/api/";

  constructor(private http: HttpClient) { }

  listProduct(){
    const url = this.baseUrl + "products";
    return this.http.get(url);
  }

  addProduct(product : any){
    const url = this.baseUrl + "product/add";
    return this.http.post(url, product);
  }

  editProduct(product : any){
    const url = this.baseUrl + "product/" + product.id +"/edit";
    return this.http.put(url, product);
  }

  deleteProduct(product : any){
    //const url = this.baseUrl + "product/" + product.id + "/delete";
    const url = this.baseUrl + "product/" + product.id + "/delete";
    return this.http.delete(url);
  }

  singleUser(){
    const url = "https://reqres.in/api/users/2";
    return this.http.get(url);

  }
  testCode(){
    const url = "https://reqres.in/api/unknown";
    return this.http.get(url);
  }
  listOfUser(){
    const list= "https://reqres.in/api/users?page=2";
    return this.http.get(list);
  }

  loginCall(data : any){
    const url = "https://reqres.in/api/login";
    return this.http.post(url, data);
  }

  userCreation(data : any){
    const url =" https://reqres.in/api/users";
    return this.http.put(url, data);
  }

  deleteUser(){
    const url ="https://reqres.in/api/users/2";
    return this.http.delete(url);
  }

  listUser(){
    const url = "https://reqres.in/api/users?page=2";
    return this.http.get(url);
  }
  getSingleUser(){
    const url = "https://reqres.in/api/users/2";
    return this.http.get(url);
  }
  getListUser(){
    const url = "https://reqres.in/api/unknown";
    return this.http.get(url);
  }
  deleteUserList(){
    const url = "https://reqres.in/api/users/2";
    return this.http.delete(url);
  }

}
