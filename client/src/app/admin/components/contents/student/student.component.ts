import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import * as moment from 'moment';
import { Student } from 'src/app/admin/models/Student';
import { StudentService } from 'src/app/admin/services/student/student.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  student: Student[] = [];

  constructor(
    private titleService: Title,
    private studentService: StudentService
  ) {
    this.titleService.setTitle('Quản lý sinh viên');
  }

  studentForm = new FormGroup({
    hoten: new FormControl('', Validators.required),
    ngaysinh: new FormControl(new Date(), Validators.required),
    gioitinh: new FormControl('--Chọn--', Validators.required),
    mssv: new FormControl('', Validators.required),
    sodienthoai: new FormControl('', Validators.required),
    cmnd: new FormControl('', Validators.required),
    diachi: new FormControl('', Validators.required),
    dantoc: new FormControl('Kinh', Validators.required),
    lop: new FormControl('--Chọn lớp--', Validators.required),
  });

  ngOnInit(): void {
    this.getAllStudent();
  }

  onSubmit = () => {
    this.createStudent();
  };

  selectRowValue = (std: Student) => {
    this.studentForm.value.hoten = std.HoTen;
    this.studentForm.value.ngaysinh = std.NgaySinh;
    this.studentForm.value.gioitinh = std.GioiTinh;
    this.studentForm.value.mssv = std.Mssv;
    this.studentForm.value.sodienthoai = std.DienThoai;
    this.studentForm.value.cmnd = std.Cmnd;
    this.studentForm.value.diachi = std.DiaChi;
    this.studentForm.value.dantoc = std.DanToc;
    this.studentForm.value.lop = std.MaLop;
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
        alert(rep);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  deleteStudent = (id: number) => {
    this.studentService.delete(id).subscribe(
      (rep) => {
        alert(rep);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  updateStudent = () => {
    this.studentService.update(this.studentForm.value).subscribe(
      (rep) => {
        alert(rep);
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
