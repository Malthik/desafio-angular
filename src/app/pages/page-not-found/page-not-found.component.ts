import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
})
export class PageNotFoundComponent implements OnInit {
  contentHeight: number = 1024;

  constructor() {}

  ngOnInit() {
    this.setHeightValue(window.innerHeight);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.setHeightValue(window.innerHeight);
  }

  setHeightValue(height: number) {
    this.contentHeight = height - 100;
    let heightDefinition = 'height:' + this.contentHeight + 'px';
    document
      .getElementById('pageContent')
      ?.setAttribute('style', heightDefinition);
  }
}
