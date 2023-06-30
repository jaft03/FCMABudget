import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html'
})
export class UsersListComponent {
  public users: UserEntity[] = [];
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<UserEntity[]>(baseUrl + 'users').subscribe(
      result => { this.users = result; },
      error => { console.error(error); });
  }
}

interface UserEntity {
  userId: string;
  userName: string;
  createDate: string;
  modifiedDate: string;
}
