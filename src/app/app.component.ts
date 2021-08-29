import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit(): void {
    this.loadScript('../assets/vendor/bootstrap/js/bootstrap.bundle.js');
    this.loadScript('../assets/vendor/aos/aos.js');
    this.loadScript('../assets/vendor/isotope-layout/isotope.pkgd.min.js');
    this.loadScript('../assets/vendor/swiper/swiper-bundle.min.js');
    this.loadScript('../assets/vendor/purecounter/purecounter.js');
    this.loadScript('../assets/vendor/glightbox/js/glightbox.min.js');
    this.loadScript('../assets/js/main.js');
    
  }
  // "src/assets/vendor/bootstrap/js/bootstrap.bundle.js",
  // "src/assets/vendor/isotope-layout/isotope.pkgd.min.js",
  // "src/assets/vendor/swiper/swiper-bundle.min.js",
  // "src/assets/vendor/purecounter/purecounter.js",
  // "src/assets/vendor/glightbox/js/glightbox.min.js",
  // "src/assets/js/main.js"

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
}
