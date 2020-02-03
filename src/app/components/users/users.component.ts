import {Component, OnInit} from '@angular/core';
import {IUser} from "../../interfaces/IUser";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import { IResponse } from 'src/app/interfaces/IResponse';
import { LocalStorageService } from 'ngx-webstorage';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public loading: boolean = false;
  public users: IUser[] = [];

  constructor(
    private http: HttpClient,
    private ls: LocalStorageService,
  ) {
  }

  ngOnInit() {

    this.getUsers();

  }

  public getUsers() {
    this.loading = true;
    this.http.get<IResponse>(environment.apiUrl + "/users")
      .subscribe(response => {
        this.users = response.users;
        this.loading = false;
      });
  }

  public deleteUser(id) {
    this.http.delete(environment.apiUrl + "/users/" + id)
      .subscribe(_ => {
        this.getUsers();
      });
  }

}
