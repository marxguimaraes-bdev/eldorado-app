import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CreateDeviceComponent } from './create-device/create-device.component';
import { CreateCategoryComponent } from './create-category/create-category.component';

@NgModule({
  declarations: [
    AppComponent,
    DeviceListComponent,
    CategoryListComponent,
    CreateDeviceComponent,
    CreateCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'devices', component: DeviceListComponent},
      {path: 'categories', component: CategoryListComponent},
      {path: 'create-device', component: CreateDeviceComponent},
      {path: 'create-category', component: CreateCategoryComponent},
      {path: '', redirectTo: '/devices', pathMatch: 'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
