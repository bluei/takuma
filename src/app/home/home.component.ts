import { DOCUMENT, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, OnInit, afterNextRender, inject, PLATFORM_ID, Renderer2, RendererFactory2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import AOS from 'aos';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  private renderer = inject(Renderer2);
  private rendererFactory = inject(RendererFactory2);


  private meta = inject(Meta);
  private titleService = inject(Title);

  metaTitle: string = 'Home - Original Okinawan Karate';
  metaDescription: string = 'The home of Shidokan Takuma, Original Okinawan Karate.';
  metaImage: string = 'https://res.cloudinary.com/blue-i/image/upload/v1720183307/ook/backgrounds/shidokan-takuma-karate-meta-image.png';

  constructor() {

    afterNextRender(() => {
      // this is where we add scripts. also can be added in the index.html for CDNs
      // REFERENCE
      // https://dev.to/aswinthgt/mastering-seo-with-angular-v18-5166
      // https://medium.com/@Codeible/adding-loading-and-using-javascript-in-angular-3281ea4b056b#:~:text=Go%20into%20the%20app%20component,body%20of%20the%20HTML%20page.
      // https://medium.com/@pavel.salauyou/explanation-of-afternextrender-and-afterrender-functions-in-angular-254c35f1d0c6
      // https://angular.dev/guide/hydration#errors


      console.log("afterNextRender in home");
      this.addStructuredData();
      this.addCalendly();
    });

  }


  ngOnInit(): void {

    AOS.refresh();

    // Standard Meta Tags
    this.titleService.setTitle(this.metaTitle);
    this.meta.updateTag({ name: 'description', content: this.metaDescription });
    this.meta.updateTag({ name: 'keywords', content: 'Original Okinawan Karate, Karate, Shidokan, Takuma, Martial Arts, Self Defense, MMA, Grand Rapids Dojo, Iha Dojo, Sensei Iha, Sensei Maeshiro' });

    // Open Graph Meta Tags
    this.meta.updateTag({ property: 'og:title', content: this.metaTitle });
    this.meta.updateTag({ property: 'og:description', content: this.metaDescription });
    this.meta.updateTag({ property: 'og:image', content: this.metaImage });
  }

  addStructuredData() {
    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = `
      {
        "@context": "http://schema.org",
        "@type": "Organization",
        "name": "Original Okinawan Karate",
        "url": "https://originalokinawankarate.com",
        "logo": "https://res.cloudinary.com/blue-i/image/upload/c_scale,w_600/v1717160439/ook/graphics/takuma-rnd-logo-kanji-wht-mobile.png",
        "description": "` + this.metaDescription + `"
      }`;

    this.renderer.appendChild(document.head, script);
  }

  addCalendly() {
    const script = this.renderer.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.type = "text/javascript";
    script.async;

    this.renderer.appendChild(document.head, script);
    
  }




}
