import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { NewsResponse, News } from './news.interface';

@Injectable({
  providedIn: 'root'
})
export class WagtailService {
  private pagesUrl: string = 'https://wagtail-dev-azuatmfu7q-uc.a.run.app/en/api/v2/pages';

  constructor(
    private http: HttpClient,
  ) { }

  getNews(params): Observable<NewsResponse> {
    const requestParams = {
      ...params,
      type: 'home.News'
    }
    return this.http.get<NewsResponse>(this.pagesUrl, { params: requestParams });
  }

  getNewsById(id: number): Observable<News> {
    return this.http.get<News>(`${this.pagesUrl}/${id}`);
  }
}
