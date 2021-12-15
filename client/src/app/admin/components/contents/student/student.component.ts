import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import * as moment from 'moment';
import { DataTable } from 'src/app/admin/config/datatable';

declare var $: any;

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Quản lý sinh viên');
  }

  studentForm = new FormGroup({
    hoten: new FormControl('', Validators.required),
    ngaysinh: new FormControl(new Date(), Validators.required),
    gioitinh: new FormControl('--Chọn--', Validators.required),
    masv: new FormControl('', Validators.required),
    sodienthoai: new FormControl('', Validators.required),
    cmnd: new FormControl('', Validators.required),
    diachi: new FormControl('', Validators.required),
    dantoc: new FormControl('Kinh', Validators.required),
    lop: new FormControl('--Chọn lớp--', Validators.required),
  });

  onSubmit = () => {
    console.log(moment(this.studentForm.value.ngaysinh).format('DD/MM/YYYY'));
  };

  ngOnInit(): void {
    DataTable('student');
  }

  get f() {
    return this.studentForm.controls;
  }
}
