import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Employee } from 'src/app/admin/models/Employee';
import { EmployeeService } from 'src/app/admin/services/employee/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employee: Employee[] = [];
  id?: number = 0;
  constructor(
    private titleService: Title,
    private employeeService: EmployeeService
  ) {
    this.titleService.setTitle('Quản lý nhân viên');
  }
  employeeForm = new FormGroup({
    manv: new FormControl('', Validators.required),
    tennv: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    dienthoai: new FormControl('', Validators.required),
    diachi: new FormControl('', Validators.required),
  });
  ngOnInit(): void {
    this.getAll();
  }
  onSubmit = () => {
    this.create();
  };

  selectRowValue = (emp: Employee) => {
    this.id = emp.id;
    this.employeeForm.setValue({
      manv: emp.MaNV,
      tennv: emp.TenNV,
      email: emp.Email,
      dienthoai: emp.DienThoai,
      diachi: emp.DiaChi,
    });
  };
  getAll = () => {
    this.employeeService.findAll().subscribe(
      (data) => {
        this.employee = data;
      },
      (error) => {
        console.log(error);
      }
    );
  };
  create = () => {
    this.employeeService.create(this.employeeForm.value).subscribe(
      (rep) => {
        console.log(rep);
        this.getAll();
      },
      (error) => {
        console.log(error);
      }
    );
  };
  delete = (id?: number) => {
    this.employeeService.delete(id).subscribe(
      (rep) => {
        alert(rep);
        this.getAll();
      },
      (error) => {
        console.log(error);
      }
    );
  };
  update = () => {
    this.employeeService.update(this.id, this.employeeForm.value).subscribe(
      (rep) => {
        alert(rep);
        this.getAll();
      },
      (error) => {
        console.log(error);
      }
    );
  };

  get f() {
    return this.employeeForm.controls;
  }
}
