import {Component, OnInit} from '@angular/core';
import {IProduct} from '../../interfaces/IProducts';
import {ICategory} from '../../interfaces/ICategories';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  public product: Partial<IProduct> = {};
  public categories: ICategory[] = [];


  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.getCategories();
  }

  public saveProduct() {
    this.http.post(environment.apiUrl + '/products', this.product).subscribe(response => {
      this.router.navigate(['/products']);
    });
  }
  public getCategories() {
    this.http.get<ICategory[]>(environment.apiUrl + '/categories').subscribe(response => {
      this.categories = response;
    });
  }
}
