import { Component } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.scss'
})
export class HomeHeaderComponent {

  srcLogo: string = "https://res.cloudinary.com/blue-i/image/upload/c_crop,w_900/c_scale,w_600/v1713831606/ook/takuma-rnd-logo-kanji-wht-1200.webp";
  // srcLogo200: string = "https://res.cloudinary.com/blue-i/image/upload/c_scale,w_200/v1713831606/ook/takuma-rnd-logo-kanji-wht-1200.webp";
  srcShuri: string = "https://res.cloudinary.com/blue-i/image/upload/c_fill,h_600,w_1200/v1715603335/ook/backgrounds/1024px-Karate_ShuriCastle.jpg"
  
}
