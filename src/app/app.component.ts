import { Component, OnInit, NgZone, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit, OnInit {
  

  private meta = inject(Meta);
  private titleService = inject(Title);
  private ngZone = inject(NgZone);

  metaTitle: string = 'Shidokan Takuma, Original Okinawan Karate';
  metaDescription: string = 'Welcome to Shidokan Takuma, Authentic Okinawan Karate.';
  metaImage: string = 'https://res.cloudinary.com/blue-i/image/upload/v1720183307/ook/backgrounds/shidokan-takuma-karate-meta-image.png';

  platformId = inject(PLATFORM_ID);


  

  ngOnInit(): void {
    
    if (typeof document !== 'undefined') {
      // Your browser-specific code here
      console.log('doc not undefined ngOnInit');
      this.updateMetaTags();
      AOS.init({ once: false, duration: 1000 });
    }
    // if (document.readyState == 'complete') {
      
    //   
    // }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.ngZone.runOutsideAngular(() => {
        // Run code outside Angular zone
        if (document.readyState == 'complete') {
          console.log('doc loaded after view');
        }
        console.log('Page ready');


        // AOS.init({ once: false, duration: 1000 });
        
        
        // AOS.refresh();
      });
    }
  }


  updateMetaTags() {
    
    this.titleService.setTitle(this.metaTitle);

    // Standard Meta Tags
    this.meta.updateTag({ name: 'description', content: this.metaDescription });
    this.meta.updateTag({ name: 'keywords', content: 'Original Okinawan Karate, Karate, Shidokan, Takuma, Martial Arts, Self Defense, MMA, Grand Rapids Dojo, Iha Dojo, Sensei Iha, Sensei Maeshiro' });

    // Open Graph Meta Tags
    this.meta.updateTag({ property: 'og:title', content: this.metaTitle });
    this.meta.updateTag({ property: 'og:description', content: this.metaDescription });
    this.meta.updateTag({ property: 'og:image', content: this.metaImage });
  }
  
}
