import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from "../shared/api.service";

@Component({
  selector: 'app-create-device',
  templateUrl: './create-device.component.html',
  styleUrls: ['./create-device.component.css']
})
export class CreateDeviceComponent implements OnInit {

  categories: any = []
  deviceForm: FormGroup;

  constructor(
    public api: ApiService,
    public router: Router,
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.deviceForm = this.formBuilder.group({
      color: ['', [Validators.required]],
      categoryId: ['', [Validators.required]],
      partNumber: ['', [Validators.required]],
    });

    this.loadCategories();
  }

  createDevice() {
    if (this.deviceForm.valid) {
      this.api.createDevice(this.deviceForm.value).subscribe((data: {}) => {
        this.router.navigate(['/devices']);
      });
    } else {
      window.alert('All fields are required');
    }
  }

  loadCategories() {
    return this.api.getAllCategories().subscribe((data: {}) => {
      this.categories = data;
    });
  }

  get controls(){
    return this.deviceForm.controls;
  }
}
