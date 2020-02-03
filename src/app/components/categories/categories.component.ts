import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ICategory } from 'src/app/interfaces/ICategory';
import { IResponse } from 'src/app/interfaces/IResponse';
import { LocalStorageService } from 'ngx-webstorage';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public loading: boolean = false;
  public categories: ICategory[] = [];

  constructor(
    private http: HttpClient,
    private ls: LocalStorageService,
  ) { }

  ngOnInit() {

    this.getCategories();

  }

  public getCategories() {
    this.loading = true;
    this.http.get<IResponse>(environment.apiUrl + '/categories')
    .subscribe(response => {
      this.categories = response.categories;
      this.loading = false;
    });
  }
  public deleteCategory(id) {
    this.http.delete(environment.apiUrl + '/categories/' + id)
      .subscribe(_ => {
        this.getCategories();
      });
  }

}
