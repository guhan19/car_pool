import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-latest-articles',
  templateUrl: './latest-articles.component.html',
  styleUrls: ['./latest-articles.component.css']
})
export class LatestArticlesComponent {
  pools: any = [];
  pool: any = {
    from: '',
    to: '',
  }
  constructor(private http: HttpClient) {}

  search_pool() {
    this.pool.from = this.pool.to = '';
    this.http.get('http://localhost:3000/pool').subscribe(pools => this.pools = pools)
  }
}
