import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchName: string = '';
  searchResults: any = [];

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {

  }

  ngOnInit(): void {
     
  }

  searchUsers() {
    console.log(this.searchName);
    this.http.get<any[]>('https://api.github.com/search/users?q=' + this.searchName)
    .subscribe(data => {
      this.searchResults = data;
      const searchResultsObject = {
        searchTerm: this.searchName,
        searchResults: this.searchResults.items
      };

      this.localStorageService.set(`searchResults_${Date.now()}`, JSON.stringify(searchResultsObject));
      // const existingData = this.localStorageService.get('searchResults');
      // console.log(existingData);
      // //if data exists, append the new data to it
      // if (existingData) {
      //   existingData.push(...this.searchResults.items);
      //   this.localStorageService.set('searchResults', JSON.stringify(existingData));
      // } else {
      //   this.localStorageService.set('searchResults', JSON.stringify(this.searchResults.items));
      // }
    
      console.log(this.searchResults.items);
    });
  }

}
