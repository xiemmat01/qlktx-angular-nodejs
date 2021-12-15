import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataTable } from 'src/app/admin/config/datatable';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Quản lý nhân viên');
  }

  ngOnInit(): void {
    DataTable('employee');
  }
}
