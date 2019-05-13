import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Image } from '../models/image';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{

  imageModel = new Image('', '', '', '', '', '');

  images:object;
  imageId:string;

  constructor(private router:Router, private http:HttpClient, private data:DataService){

  }

  ionViewWillEnter(){
    console.log("Entered");
    this.getImages();
  }

  onClick(id:string){
    console.log(id);
    //this.imageId = id;
    this.imageModel.id = id;
    //this.router.navigate(['/item']);
  }

  getImages(){
    this.data.getImages().subscribe(data =>{
      this.images = data;
      console.log(this.images);
      // console.log(this.userId);
    });
  }
}
