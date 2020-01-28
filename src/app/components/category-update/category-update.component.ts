import { Component, OnInit } from '@angular/core';
import {IProduct} from "../../interfaces/IProduct";
import {ICategory} from "../../interfaces/ICategory";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.scss']
})
export class CategoryUpdateComponent implements OnInit {

  public category: Partial<ICategory> = {};

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.initCategory(params.categoryId);
    });
  }

  public initCategory(id: string) {
    this.http.get<ICategory>(environment.apiUrl + '/categories/' + id)
      .subscribe(response => {
        this.category = response;
      });
  }

  public saveCategory() {
    this.http.put(environment.apiUrl + '/categories/' + this.category._id, this.category)
      .subscribe(response => {
        this.router.navigate(['/categories']);
      });
  }



}
