import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  images = [
    {src : '../../assets/images/poert1.png'},
    {src : '../../assets/images/port2.png'},
    {src : '../../assets/images/port3.png'},
    {src : '../../assets/images/poert1.png'},
    {src : '../../assets/images/port2.png'},
    {src : '../../assets/images/port3.png'},

  ];

  expandedImage: string | null = null;

  expandImage(image: any): void {
    this.expandedImage = image.src;
  }

  closeExpandedImage(): void {
    this.expandedImage = null;
  }
}
