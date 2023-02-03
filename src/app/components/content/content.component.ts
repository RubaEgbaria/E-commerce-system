import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{

  imgWidth:number = 100 ;
  imgHeight:number = 100;
  toShow : String = '';

  // Get data

  constructor(){}
  ngOnInit(): void {
    
  } 
  get_data (): void {


  }
  increase() : void {
    this.imgWidth += 10;
  }
  reset() : void {
    this.imgWidth = 100;
  }
  decrease() : void {
    this.imgWidth -= 10;
  }
  bigImgVR() : void {
    this.toShow = 'vr';
    this.imgHeight =  250;
    this.imgWidth = 400;
  }
  bigImgSher() : void {
    this.toShow = 'sherlock';
    this.imgHeight =  250;
    this.imgWidth = 400;
  }
  bigImgTele() : void {
    this.toShow = 'telescope';
    this.imgHeight =  250;
    this.imgWidth = 400;
  }
  bigImgWatch() : void {
    this.toShow = 'watch';
    this.imgHeight =  250;
    this.imgWidth = 400;
  }
  mouseOut(): void {
    console.log("mouse out ");
    this.imgHeight =  0;
    this.imgWidth = 0;
  }

}
