import { Component, OnInit } from '@angular/core';

import { ApiService } from "../shared/api.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: any = [];

  constructor(public api: ApiService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    return this.api.getAllCategories().subscribe((data: {}) => {
      this.categories = data;
    });
  }

  deleteCategory(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.api.deleteCategory(id).subscribe(data => {
        this.loadCategories();
      });
    }
  }
}
