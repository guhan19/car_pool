import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-show-ride',
  templateUrl: './show-ride.component.html',
  styleUrls: ['./show-ride.component.css']
})
export class ShowRideComponent {
  pool: any = {
    from: '',
    to: '',
    n_seats: 0,
  }

  constructor(private http: HttpClient) {}

  sendPool() {

    this.http.post('http://localhost:3000/pool', this.pool)
      .subscribe(resp => console.log(resp))
  }
}
