import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoryComponent } from './category/category.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductComponent } from './product/product.component';
import { OnlineshoppingService } from './onlineshopping.service';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { HeadersampleComponent } from './headersample/headersample.component';
import { MochParentComponent } from './moch-parent/moch-parent.component';
import { MilkChildComponent } from './milk-child/milk-child.component';




@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    HeaderComponent,
    HomePageComponent,
    ProductComponent,
    LoginComponent,
    UsersComponent,
    HeadersampleComponent,
    MochParentComponent,
    MilkChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [OnlineshoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
