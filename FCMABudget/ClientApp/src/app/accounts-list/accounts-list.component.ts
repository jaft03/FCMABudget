import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html'
})
export class AccountsListComponent {
  public forecasts: Account[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Account[]>(baseUrl + 'weatherforecast').subscribe(
      result => { this.forecasts = result; },
      error => { console.error(error); });
  }
}

interface Account {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
