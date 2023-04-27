import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  profiles: any = [];
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.http.get<any[]>('https://api.github.com/users')
      .subscribe(data => {
        this.profiles = data;
        console.log(this.profiles);
      });
     
  }

}
