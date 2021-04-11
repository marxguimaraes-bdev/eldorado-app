import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from "../shared/api.service";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  categoryForm: FormGroup;

  constructor(
    public api: ApiService,
    public router: Router,
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      name: ['', [Validators.required]],
    });
  }

  createCategory() {
    if (this.categoryForm.valid) {
      this.api.createCategory(this.categoryForm.value).subscribe((data: {}) => {
        this.router.navigate(['/categories']);
      });
    } else {
      window.alert('Name is required');
    }
  }

  get controls(){
    return this.categoryForm.controls;
  }
}
