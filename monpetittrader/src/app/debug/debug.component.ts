import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

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

  constructor(private http:HttpClient) {}

  ngOnInit() {
    this.queryApi();
  }

  queryApi() {
    this.statusClass = 'gray-tick';
    this.iconClass = 'fa-spinner fa-spin';

    this.http.get('http://localhost:8080').subscribe(
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
}
