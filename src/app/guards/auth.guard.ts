import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {IResponse} from "../interfaces/IResponse";
import {LocalStorageService} from "ngx-webstorage";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private http: HttpClient,
    private ls: LocalStorageService
  ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve) => {
      this.http.get<IResponse>(environment.apiUrl + "/auth/check").subscribe(response => {
        if (response.success) {
          this.ls.store('user', response.user);
          resolve(true);
        } else {
          this.router.navigate(['/login']);
          resolve(false);
        }
      });

    });


    // const response = await this.http.get(environment.apiUrl + "/auth/check");
    // const token = this.ls.retrieve("token");
    // if (token) {
    //   return true;
    // } else {
    //   this.router.navigate(["/login"]);
    //   return false;
    // }

  }

}
