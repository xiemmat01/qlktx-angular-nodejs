import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  manv?: string;
  constructor(
    private titleService: Title,
    private elementRef: ElementRef,
    private employeeService: EmployeeService
  ) {
    this.titleService.setTitle('Quản lý nhân viên');
  }
  ngOnInit(): void {
    this.getAll();
  }
  employeeForm = new FormGroup({
    manv: new FormControl('', Validators.required),
    tennv: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    dienthoai: new FormControl('', Validators.required),
    diachi: new FormControl('', Validators.required),
  });
  UpdateNVForm = new FormGroup({
    manv: new FormControl('', Validators.required),
    tennv: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    dienthoai: new FormControl('', Validators.required),
    diachi: new FormControl('', Validators.required),
  });

  onSubmit = () => {
    this.create();
  };
  CloseModal = () => {};

  selectRowValue = (emp: Employee) => {
    this.UpdateNVForm.setValue({
      manv: emp.MaNV,
      tennv: emp.TenNV,
      email: emp.Email,
      dienthoai: emp.DienThoai,
      diachi: emp.DiaChi,
    });
    this.manv = emp.MaNV;
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
  delete = (manv?: string) => {
    this.employeeService.delete(manv).subscribe(
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
    this.employeeService.update(this.manv, this.UpdateNVForm.value).subscribe(
      (rep: any) => {
        alert(rep.message);
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
  get f2() {
    return this.UpdateNVForm.controls;
  }
}
