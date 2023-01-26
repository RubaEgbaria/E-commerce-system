import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{

  imgWidth:number = 100 ;
  imgHeight:number = 100;
  showVR : boolean = false;
  showSherlock: boolean = false;
  showTele : boolean = false;
  showWatch: boolean = false;

  constructor(){}
  ngOnInit(): void {
    
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
    this.showVR = true;
    this.showSherlock = false;
    this.showTele = false;
    this.showWatch = false;

    this.imgHeight =  250;
    this.imgWidth = 400;
  }
  bigImgSher() : void {
    this.showSherlock = true;
    this.showTele = false;
    this.showWatch = false;
    this.showVR = false;
    this.imgHeight =  250;
    this.imgWidth = 400;
  }
  bigImgTele() : void {
    this.showSherlock = false;
    this.showTele = true;
    this.showWatch = false;
    this.showVR = false;
    this.imgHeight =  250;
    this.imgWidth = 400;
  }
  bigImgWatch() : void {
    this.showSherlock = false;
    this.showTele = false;
    this.showWatch = true;
    this.showVR = false;
    this.imgHeight =  250;
    this.imgWidth = 400;
  }
  mouseOut(): void {
    console.log("mouse out ");
    this.imgHeight =  0;
    this.imgWidth = 0;
  }

}
