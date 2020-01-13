import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {IProduct} from '../../interfaces/IProducts';
import {ICategory} from '../../interfaces/ICategories';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {

  public product: Partial<IProduct> = {};
  public categories: ICategory[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.getCategories();
    this.route.params.subscribe(params => {
      this.initProduct(params.productId);
    });
  }

  public initProduct(id: string) {
    this.http.get<IProduct>(environment.apiUrl + '/products/' + id)
      .subscribe(response => {
        this.product = response;
      });
  }

  public saveProduct() {
    this.http.put(environment.apiUrl + '/products/' + this.product._id, this.product)
      .subscribe(response => {
        this.router.navigate(['/products']);
      });
  }

  public getCategories() {
    this.http.get<ICategory[]>(environment.apiUrl + '/categories')
      .subscribe(response => {
        this.categories = response;
      });
  }

}
