import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  searchResults: any[] = [];

  constructor(private localStorageService: LocalStorageService) {

  }

  
  ngOnInit() {
    const keys = Object.keys(localStorage).filter(key => key.startsWith('searchResults_'));
    for(const key of keys) {
      const searchResultsObject = this.localStorageService.get(key);
      this.searchResults.push(searchResultsObject);
    }
  }


  clearSearchHistory(){
    this.searchResults = [];
    this.localStorageService.clear();    
  }
}
