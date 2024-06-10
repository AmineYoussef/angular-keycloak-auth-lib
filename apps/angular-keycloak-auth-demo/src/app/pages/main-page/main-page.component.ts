import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HttpClientModule],
  styleUrl: './main-page.component.css',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  constructor(private readonly http: HttpClient) { }

  sendRequest(): void {
    let headers = new HttpHeaders().append("X-API-KEY", "de8124dc113a4b1c80d2274e209857e7")
    this.http.get("https://randommer.io/api/Name?nameType=fullname&quantity=1", { headers }).subscribe(res => console.log(res))
  }
}