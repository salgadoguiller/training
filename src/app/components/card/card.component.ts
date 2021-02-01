import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'tr-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() public url: string;
  @Input() public title: string = 'Title';
  @Input() public subtitle: string = 'Subtitle';
  @Input() public description: string = 'Description';
  @Input() public image: string = 'https://liuwagtailprod.blob.core.windows.net/lni-wagtail-prod/images/Planeacion-y-organizacion.original.format-jpeg.jpg';

  constructor(
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
  }

  getImage() {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${this.image})`);
  }
}
