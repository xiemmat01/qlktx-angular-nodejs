import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { DataTable } from 'src/app/admin/config/datatable';
declare var $: any;
@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css'],
})
export class BillsComponent implements OnInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Quản lý tiền điện nước');
  }

  ngOnInit(): void {
    DataTable('bills');
  }
}
