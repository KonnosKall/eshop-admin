import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ProductsComponent} from './components/products/products.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {ProductCreateComponent} from './components/product-create/product-create.component';
import {ProductUpdateComponent} from './components/product-update/product-update.component';
import {CategoriesComponent} from './components/categories/categories.component';
import {EditorModule} from '@tinymce/tinymce-angular';
import {LoginComponent} from './components/login/login.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { CategoryUpdateComponent } from './components/category-update/category-update.component';
import { CategoryCreateComponent } from './components/category-create/category-create.component';
import { UsersComponent } from './components/users/users.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AuthGuard } from './guards/auth.guard';

const routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'users',
        children: [
          {
            path: '',
            component: UsersComponent
          },
          {
            path: 'create',
            component: UserCreateComponent
          },
          {
            path: 'update/:userId',
            component: UserUpdateComponent
          }
        ]
      },
      {
        path: 'products',
        children: [
          {
            path: '',
            component: ProductsComponent
          },
          {
            path: 'create',
            component: ProductCreateComponent
          },
          {
            path: 'update/:productId',
            component: ProductUpdateComponent
          }
        ]
      },
      {
        path: 'categories',
        children: [
          {
            path: '',
            component: CategoriesComponent
          },
          {
            path: 'create',
            component: CategoryCreateComponent
          },
          {
            path: 'update/:categoryId',
            component: CategoryUpdateComponent
          }
        ]
      },
    ]
  },

  {
    path: 'login',
    component: LoginComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    ProductsComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    CategoriesComponent,
    LoginComponent,
    AdminLayoutComponent,
    CategoryUpdateComponent,
    CategoryCreateComponent,
    UsersComponent,
    UserCreateComponent,
    UserUpdateComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    NgxWebstorageModule.forRoot(),
    EditorModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
