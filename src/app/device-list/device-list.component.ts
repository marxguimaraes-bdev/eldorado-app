import { Component, OnInit } from '@angular/core';

import { ApiService } from "../shared/api.service";

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

  devices: any = [];
  isLoading = false;

  constructor(public api: ApiService) {}

  ngOnInit(): void {
    this.loadDevices();
  }

  loadDevices() {
    this.isLoading = true;

    return this.api.getAllDevices().subscribe((data: {}) => {
      this.devices = data;
      this.isLoading = false;
    });
  }

  deleteDevice(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.api.deleteDevice(id).subscribe(data => {
        this.loadDevices();
      });
    }
  }
}
