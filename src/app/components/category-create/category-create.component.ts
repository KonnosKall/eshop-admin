import { Component, OnInit } from '@angular/core';
import {ICategory} from '../../interfaces/ICategory';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss']
})
export class CategoryCreateComponent implements OnInit {


  public category: Partial<ICategory> = {};

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {

  }

  public saveCategory() {
    this.http.post(environment.apiUrl + '/categories', this.category)
      .subscribe(response => {
        this.router.navigate(['/categories']);
      });
  }



}
