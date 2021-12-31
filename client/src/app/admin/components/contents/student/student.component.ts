import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
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
  mssv?: string = '';
  class: any;
  checkForm: any;
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
    ngaysinh: new FormControl(new Date('01-01-1999'), Validators.required),
    phai: new FormControl('0', Validators.required),
    mssv: new FormControl('', Validators.required),
    dienthoai: new FormControl('', [
      Validators.required,
      Validators.pattern('0[0-9]{9}'),
    ]),
    cmnd: new FormControl('', [
      Validators.required,
      Validators.pattern('0[0-9]{9}'),
    ]),
    diachi: new FormControl('', Validators.required),
    dantoc: new FormControl('Kinh', Validators.required),
    malop: new FormControl('CNTT01', Validators.required),
  });
  UpdateSVForm = new FormGroup({
    hoten: new FormControl('', Validators.required),
    ngaysinh: new FormControl(new Date('01-01-1999'), Validators.required),
    phai: new FormControl('--Chọn--', Validators.required),
    mssv: new FormControl('', Validators.required),
    dienthoai: new FormControl('', [
      Validators.required,
      Validators.pattern('0[0-9]{9}'),
    ]),
    cmnd: new FormControl('', [
      Validators.required,
      Validators.pattern('^(([0-9]*)|(([0-9]*).([0-9]*)))$'),
    ]),
    diachi: new FormControl('', Validators.required),
    dantoc: new FormControl('Kinh', Validators.required),
    malop: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.getAllStudent();
    this.getClass();
  }

  onSubmit = () => {
    this.createStudent();
  };

  selectRowValue = (std: Student) => {
    console.log(std);
    this.mssv = std.Mssv;
    this.UpdateSVForm.setValue({
      hoten: std.HoTen,
      mssv: std.Mssv,
      ngaysinh: new Date(std.NgaySinh ? std.NgaySinh : ''),
      phai: std.Phai === true ? 1 : 0,
      dienthoai: std.DienThoai,
      cmnd: std.Cmnd,
      diachi: std.DiaChi,
      dantoc: std.DanToc,
      malop: std.MaLop,
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
      (res) => {
        console.log(res);
        this.getAllStudent();
      },
      (error) => {
        console.log(error);
      }
    );
  };
  deleteStudent = (mssv?: string) => {
    this.studentService.delete(mssv).subscribe(
      (res) => {
        console.log(res);
        this.getAllStudent();
      },
      (error) => {
        console.log(error);
      }
    );
  };
  updateStudent = () => {
    this.studentService.update(this.mssv, this.UpdateSVForm.value).subscribe(
      (res: any) => {
        alert(res.message);
        this.UpdateSVForm.reset();
        this.mssv = '';
        this.getAllStudent();
      },
      (error) => {
        console.log(error);
      }
    );
  };
  getClass() {
    this.studentService.findClass().subscribe((data) => (this.class = data));
  }

  get f() {
    return this.studentForm.controls;
  }
}
