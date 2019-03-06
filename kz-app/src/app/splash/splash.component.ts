import { Component, OnInit } from '@angular/core';
import {randomColor} from '../../../node_modules/randomcolor';
@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
  constructor() { // Get elements
    let row = document.getElementById("row");
    let heading = document.getElementById("heading");
    let strapline = document.getElementById("strapline");

// Fonts array
    let fonts = ['Droid-Sans','Arvo','Corben','Lobster','Droid-Serif','Raleway','Goudy-Bookletter-1911','Abril-Fatface','Yanone-Kaffeesatz','Hammersmith-One','Lato','PT-Sans-Narrow','Open-Sans','Open-Sans-Condensed','Old-Standard-TT','Merriweather','Montserrat','Roboto','Titillium-Web','Karla','Oswald','Glegoo','Vollkorn','Courgette','Abel','Sniglet','Ubuntu','PT-Sans','PT-Serif','PT-Mono','Times-New-Roman','Tahoma','Trebuchet','Verdana','Palatino','Impact','Helvetica','Myriad-Pro','Georgia','Futura','Courier-New','Arial'];

// Randomise styles
    let randHeading = fonts[Math.floor(Math.random() * fonts.length)];
    let randStrapline = fonts[Math.floor(Math.random() * fonts.length)];
    let randImage = "https://unsplash.it/1200/800/?image=" + Math.floor(100 + Math.random() * 900);


// Apply random styles
    row.style.color = randomColor({luminosity: 'light'});
    row.style.backgroundColor = randomColor({luminosity: 'dark'});
    row.style.backgroundImage = "url(" + randImage + ")";

    heading.setAttribute("class", randHeading);
    strapline.setAttribute("class", randStrapline);

  }

  ngOnInit() {
  }

}
