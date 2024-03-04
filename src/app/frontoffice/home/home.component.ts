import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  scrollToSection(nomSection:any) {
    const clickSection = document.getElementById(nomSection);
    if (clickSection) {
      this.viewportScroller.scrollToAnchor(nomSection);
    }
  }

  scrollToTop(scrollStep:number) {
    const scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, -scrollStep);
      }
    }, 15); // scroll vitesse
  }
}
