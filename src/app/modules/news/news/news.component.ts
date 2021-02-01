import { Component, OnInit } from '@angular/core';

import { Colors } from 'src/app/utilities/enums';
import { WagtailService } from 'src/app/services/wagtail/wagtail.service';
import { NewsResponse, News } from 'src/app/services/wagtail/news.interface';

@Component({
  selector: 'tr-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public bannerColor = Colors.PURPLE;

  public news: News[];

  constructor(
    private wagtailService: WagtailService,
  ) { }

  ngOnInit(): void {
    this.wagtailService.getNews({
      child_of: '1396',
      fields: 'id,_title,description,short_description,image_url',
    }).subscribe((response: NewsResponse) => {
      this.news = response.items;
    });
  }

}
