import { Component, OnInit, NgZone, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {

  platformId = inject(PLATFORM_ID);
  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.ngZone.runOutsideAngular(() => {
        // Run code outside Angular zone
        if (document.readyState == 'complete') {
          // console.log('doc loaded');
        }
        console.log('Page ready');
        AOS.init({ once: false, duration: 1000 });
        // AOS.refresh();
      });
    }
  }
  
}
