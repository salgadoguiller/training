import { Component, OnInit } from '@angular/core';

import { Colors } from 'src/app/utilities/enums';

@Component({
  selector: 'tr-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public bannerColor = Colors.GREEN;

  constructor() { }

  ngOnInit(): void {
  }

}
