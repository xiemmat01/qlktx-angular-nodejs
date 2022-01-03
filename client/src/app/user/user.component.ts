import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Lop } from '../admin/models/Class';
import { DkthueService } from '../admin/services/dangkythue/dkthue.service';
import { LopService } from '../admin/services/lop/lop.service';
import { RoomService } from '../admin/services/room/room.service';
import { StudentService } from '../admin/services/student/student.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  issubmit: boolean = false;
  isLogin: boolean = false;
  lop: any = [];
  khoa: any = [];
  phong: any = [];
  dsLopByKhoa: any = [];
  dk: any = [];
  constructor(
    private room: RoomService,
    private st: StudentService,
    private http: HttpClient,
    private router: Router,
    private dkthue: DkthueService,
    private lopService: LopService
  ) {}

  ngOnInit(): void {
    this.getLop();
    this.getKhoa();
    this.getPhong();
  }
  dangkythue = new FormGroup({
    hoten: new FormControl('', Validators.required),
    mssv: new FormControl('', Validators.required),
    ngaysinh: new FormControl(new Date('01-01-1999'), Validators.required),
    gt: new FormControl('0', Validators.required),
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
    khoa: new FormControl('----Chọn khoa----', Validators.required),
    malop: new FormControl('----Chọn lớp----', Validators.required),
    thang: new FormControl('6', Validators.required),
    map: new FormControl('----Chọn phòng----', Validators.required),
  });

  dangky() {
    this.issubmit = true;
    setTimeout(() => {
      this.issubmit = false;
    }, 2000);
    console.log(this.dangkythue.value);
    this.dkthue.addData(this.dangkythue.value);
    // localStorage.setItem('dangkythue', JSON.stringify(this.dangkythue.value));

    // if (this.dk.lenght != 0) {
    //   this.dk = [...this.dk, localStorage.getItem('dangkythue')];
    // } else {
    //   this.dk = [localStorage.getItem('dangkythue')];
    // }
    // localStorage.setItem('dsDangKy', JSON.stringify(this.dk));
    // // console.log(localStorage.getItem('dsDangKy'));
  }

  getLop() {
    this.lopService.findAll().subscribe((data) => (this.lop = data));
  }
  getKhoa() {
    this.st.findKhoa().subscribe((data) => (this.khoa = data));
  }
  getPhong() {
    this.room.getAll().subscribe((data) => (this.phong = data));
  }

  loginForm = new FormGroup({
    manv: new FormControl('NV002'),
    matkhau: new FormControl('123456'),
  });
  login() {
    this.http
      .get(
        `http://localhost:5000/api/nhan-vien/${this.loginForm.value.manv}/${this.loginForm.value.matkhau}`
      )
      .subscribe((data: any) => {
        if (data.length) {
          this.isLogin = true;
          document.getElementById('autoclick')?.click();
          sessionStorage.setItem('manv', data[0].MaNV);
          sessionStorage.setItem('tennv', data[0].TenNV);
          this.router.navigateByUrl('/admin/phong');
        } else {
          alert(
            'Bạn đăng nhập không thành công! Kiểm tra lại mật khẩu hay tên tài khoản'
          );
        }
      });
  }

  selectChange() {
    let lopbymakhoa = this.lop.filter(
      (item: Lop) => item.MaKhoa == this.dangkythue.value.khoa
    );
    this.dsLopByKhoa = lopbymakhoa;
    console.log(this.dsLopByKhoa);
  }
}
