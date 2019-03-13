import { Component, OnInit } from '@angular/core';
import { Image } from '@ks89/angular-modal-gallery';
import {PlainGalleryConfig} from "@ks89/angular-modal-gallery";
import {PlainGalleryStrategy} from "@ks89/angular-modal-gallery";
import {AdvancedLayout} from "@ks89/angular-modal-gallery";
import {GridLayout} from "@ks89/angular-modal-gallery";

@Component({
  selector: 'app-portrait',
  templateUrl: './portrait.component.html',
  styleUrls: ['./portrait.component.css']
})
export class PortraitComponent implements OnInit {

  // customPlainGalleryRowDescConfig: PlainGalleryConfig = {
  //   strategy: PlainGalleryStrategy.CUSTOM,
  //   layout: new AdvancedLayout(-1, true)
  // };
  plainGalleryGrid: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.GRID,
    layout: new GridLayout({ width: '200px', height: '200px' }, { length: 5, wrap: true })
  };

  imagesRect: Image[] = [
    new Image(0, {
      // modal
      img: '../../assets/portraits/1.jpg'//,
      // description: 'Description 1'
    }),
    new Image(1, {
      // modal
      img: '../../assets/portraits/2.jpg'
    }),
    new Image(2, {
      // modal
      img: '../../assets/portraits/3.jpg',
      description: 'Description 3'
    }),
    new Image(3, {
      // modal
      img: '../../assets/portraits/4.jpg',
      description: 'Description 4'
    }),
    new Image(4, {
      // modal
      img: '../../assets/portraits/5.jpg'
    }),
    new Image(5, {
      // modal
      img: '../../assets/portraits/6.jpg'
    }),
    new Image(6, {
      // modal
      img: '../../assets/portraits/7.jpg'
    }),
    new Image(7, {
      // modal
      img: '../../assets/portraits/8.jpg'
    }),
    new Image(8, {
      // modal
      img: '../../assets/portraits/9.jpg'
    }),
    new Image(9, {
      // modal
      img: '../../assets/portraits/10.jpg'
    }),
    new Image(10, {
      // modal
      img: '../../assets/portraits/11.jpg'
    }),
    new Image(12, {
      // modal
      img: '../../assets/portraits/12.jpg'
    })
  ];

  // openImageModalRowDescription(image: Image) {
  //   console.log('Opening modal gallery from custom plain gallery row and description, with image: ', image);
  //   const index: number = this.getCurrentIndexCustomLayout(image, this.imagesRect);
  //   this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, { layout: new AdvancedLayout(index, true) });
  // }

  // private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
  //   return image ? images.indexOf(image) : -1;
  // }
  constructor() {
  }

  ngOnInit() {
  }

}
