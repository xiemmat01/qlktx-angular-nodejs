import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import * as moment from 'moment';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { Student } from 'src/app/admin/models/Student';
import { StudentService } from 'src/app/admin/services/student/student.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  student: Student[] = [];
  id?: number = 0;
  constructor(
    private titleService: Title,
    private studentService: StudentService,
    private _localeService: BsLocaleService
  ) {
    this.titleService.setTitle('Quản lý sinh viên');
    this._localeService.use('vi');
  }

  studentForm = new FormGroup({
    hoten: new FormControl('', Validators.required),
    ngaysinh: new FormControl(new Date(), Validators.required),
    phai: new FormControl('--Chọn--', Validators.required),
    mssv: new FormControl('', Validators.required),
    dienthoai: new FormControl('', Validators.required),
    cmnd: new FormControl('', Validators.required),
    diachi: new FormControl('', Validators.required),
    dantoc: new FormControl('Kinh', Validators.required),
    lop: new FormControl('--Chọn lớp--', Validators.required),
  });

  ngOnInit(): void {
    this.getAllStudent();
  }

  onSubmit = () => {
    console.log(typeof this.studentForm.value.ngaysinh);
    this.createStudent();
  };

  selectRowValue = (std: Student) => {
    console.log(std);
    this.id = std.id;
    this.studentForm.setValue({
      hoten: std.HoTen,
      ngaysinh: new Date(std.NgaySinh ? std.NgaySinh : ''),
      phai: std.Phai === true ? 1 : 0,
      mssv: std.Mssv,
      dienthoai: std.DienThoai,
      cmnd: std.Cmnd,
      diachi: std.DiaChi,
      dantoc: std.DanToc,
      lop: std.MaLop,
    });
  };

  getAllStudent = () => {
    this.studentService.findAll().subscribe(
      (data) => {
        this.student = data;
      },
      (error) => {
        console.log(error);
      }
    );
  };
  createStudent = () => {
    this.studentService.create(this.studentForm.value).subscribe(
      (rep) => {
        console.log(rep);
        this.getAllStudent();
      },
      (error) => {
        console.log(error);
      }
    );
  };
  deleteStudent = (id?: number) => {
    this.studentService.delete(id).subscribe(
      (rep) => {
        alert(rep);
        this.getAllStudent();
      },
      (error) => {
        console.log(error);
      }
    );
  };
  updateStudent = () => {
    this.studentService.update(this.id, this.studentForm.value).subscribe(
      (rep) => {
        alert(rep);
        this.getAllStudent();
      },
      (error) => {
        console.log(error);
      }
    );
  };

  get f() {
    return this.studentForm.controls;
  }
}
