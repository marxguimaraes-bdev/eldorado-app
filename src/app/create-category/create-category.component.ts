import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from "../shared/api.service";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  @Input() newCategory = { name: '' }

  constructor(
    public api: ApiService,
    public router: Router,
  ) { }

  ngOnInit(): void { }

  createCategory() {
    this.api.createCategory(this.newCategory).subscribe((data: {}) => {
      this.router.navigate(['/categories']);
    });
  }
}
