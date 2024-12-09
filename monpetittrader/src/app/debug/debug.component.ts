import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MonpetittraderbackBackService } from '../services/monpetittraderback-back.service';

@Component({
  selector: 'app-debug',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './debug.component.html',
  styleUrl: './debug.component.css'
})
export class DebugComponent {
  statusClass = 'gray-tick';
  iconClass = 'fa-circle';

  constructor(private http: HttpClient, private backservice: MonpetittraderbackBackService) { }

  ngOnInit() {
    this.queryApi();
    this.testEndpoint();
  }

  queryApi() {
    this.statusClass = 'gray-tick';
    this.iconClass = 'fa-spinner fa-spin';

    this.backservice.get().subscribe(
      response => {
        this.statusClass = 'green-tick';
        this.iconClass = 'fa-check';
      },
      error => {
        this.statusClass = 'red-tick';
        this.iconClass = 'fa-times';
      }
    );
  }

  testEndpoint() {
    this.backservice.getDailyTimesSeries('AAPL').subscribe(
      response => {
        console.log(response);
      }
    );
  }
}
