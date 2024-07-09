import { Component, OnInit, NgZone, AfterViewInit, inject, PLATFORM_ID, Renderer2, RendererFactory2, afterNextRender } from '@angular/core';
import { DOCUMENT, isPlatformBrowser, isPlatformServer } from '@angular/common';
import AOS from 'aos';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  private meta = inject(Meta);
  private titleService = inject(Title);

  metaTitle: string = 'Original Okinawan Karate';
  metaDescription: string = 'Shidokan Takuma, Authentic and Original Okinawan Karate.';
  metaImage: string = 'https://res.cloudinary.com/blue-i/image/upload/v1720183307/ook/backgrounds/shidokan-takuma-karate-meta-image.png';

  constructor() {
    afterNextRender(() => {
      console.log("afterNextRender in constructor");
      AOS.init({ once: false, duration: 1000 });
    });
  }




  ngOnInit(): void {

    if (typeof document !== 'undefined') {
      // Your browser-specific code here
      console.log('doc not undefined ngOnInit');
      //this.updateMetaTags();
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
