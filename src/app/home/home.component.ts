import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, NgZone, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import AOS from 'aos';
import { Cloudinary } from 'cloudinary-video-player';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    AOS.refresh();
  }

  

  // platformId = inject(PLATFORM_ID);
  // constructor(private ngZone: NgZone) {}

  // ngAfterViewInit(): void {
  //   if (isPlatformBrowser(this.platformId)) {
  //     this.ngZone.runOutsideAngular(() => {
  //       // Run code outside Angular zone
  //       if (document.readyState == 'complete') {
  //         console.log('doc loaded');
  //       }
  //       console.log('Page ready');
  //       AOS.init({ once: false, duration: 1000 });
  //       //AOS.refresh();
  //     });
  //   }
  // }
  
}




