import { afterNextRender, Component, inject, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-home-start',
  templateUrl: './home-start.component.html',
  styleUrl: './home-start.component.scss'
})
export class HomeStartComponent {

  private renderer = inject(Renderer2);
  
  constructor() {

    afterNextRender(() => {
      console.log("afterNextRender in home-start");
      // this.addCalendly();
    });

  }

  addCalendly() {
    const script = this.renderer.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.type = "text/javascript";
    script.async;

    this.renderer.appendChild(document.head, script);

    
    
  }

}
