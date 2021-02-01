import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Colors } from 'src/app/utilities/enums';
import { WagtailService } from 'src/app/services/wagtail/wagtail.service';
import { News } from 'src/app/services/wagtail/news.interface';

@Component({
  selector: 'tr-specific-news',
  templateUrl: './specific-news.component.html',
  styleUrls: ['./specific-news.component.scss']
})
export class SpecificNewsComponent implements OnInit {
  public bannerColor = Colors.BLUE;

  public news: News;

  constructor(
    private activatedRoute: ActivatedRoute,
    private wagtailService: WagtailService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.wagtailService.getNewsById(+params.id).subscribe((news: News) => {
        this.news = news;
      });
    });
  }

}
