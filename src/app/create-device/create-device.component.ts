import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from "../shared/api.service";

@Component({
  selector: 'app-create-device',
  templateUrl: './create-device.component.html',
  styleUrls: ['./create-device.component.css']
})
export class CreateDeviceComponent implements OnInit {

  categories: any = []

  @Input() newDevice = { color: '', categoryId: '', partNumber: '' }

  constructor(
    public api: ApiService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  createDevice() {
    this.api.createDevice(this.newDevice).subscribe((data: {}) => {
      this.router.navigate(['/devices']);
    });
  }

  loadCategories() {
    return this.api.getAllCategories().subscribe((data: {}) => {
      this.categories = data;
    });
  }
}
