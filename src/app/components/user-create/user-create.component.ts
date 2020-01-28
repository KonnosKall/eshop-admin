import { Component, OnInit } from '@angular/core';
import {IUser} from "../../interfaces/IUser";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  public user: Partial<IUser> = {};


  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {

  }

  public saveUser() {
    this.http.post(environment.apiUrl + "/users", this.user)
      .subscribe(response => {
        this.router.navigate(["/users"]);
      });
  }



}
