import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  constructor() { }

  title = ["News Title","Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dicta?"];

  count:number

  onAlert(count){
    if(count % 2==0){
      this.count=1;
    }else{
      this.count=0;
    }

  }


   ngOnInit(): void {

 }

}
