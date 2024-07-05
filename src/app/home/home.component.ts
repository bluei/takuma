import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, NgZone, AfterViewInit, inject, PLATFORM_ID, Inject, Renderer2, RendererFactory2 } from '@angular/core';
import AOS from 'aos';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  private renderer = inject(Renderer2)
  private rendererFactory = inject(RendererFactory2)

  private meta = inject(Meta);
  private titleService = inject(Title);

  metaTitle: string = 'Home - Original Okinawan Karate';
  metaDescription: string = 'The home of Shidokan Takuma, Original Okinawan Karate.';
  metaImage: string = 'https://res.cloudinary.com/blue-i/image/upload/v1720183307/ook/backgrounds/shidokan-takuma-karate-meta-image.png';

  ngOnInit(): void {


    // Standard Meta Tags
    this.titleService.setTitle(this.metaTitle);
    this.meta.updateTag({ name: 'description', content: this.metaDescription });
    this.meta.updateTag({ name: 'keywords', content: 'Original Okinawan Karate, Karate, Shidokan, Takuma, Martial Arts, Self Defense, MMA, Grand Rapids Dojo, Iha Dojo, Sensei Iha, Sensei Maeshiro' });

    // Open Graph Meta Tags
    this.meta.updateTag({ property: 'og:title', content: this.metaTitle });
    this.meta.updateTag({ property: 'og:description', content: this.metaDescription });
    this.meta.updateTag({ property: 'og:image', content: this.metaImage });

    console.log('doc loaded home ngOnInit');

    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.addStructuredData();

    console.log('refreshing AOS');
    AOS.refresh();
  }


  addStructuredData() {
    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = `
      {
        "@context": "http://schema.org",
        "@type": "Organization",
        "name": "Your Angular App",
        "url": "https://your-angular-app.com",
        "logo": "https://your-angular-app.com/logo.png",
        "description": "Learn more about us at Your Angular App."
      }`;

    //this.renderer.appendChild(document, script);
  }

}
