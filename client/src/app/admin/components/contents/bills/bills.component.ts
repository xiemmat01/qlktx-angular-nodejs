import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Title } from '@angular/platform-browser';
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
  // constructor(private fb: FormBuilder) {}

  // sinhvien = {
  //   masv: '1711543175',
  //   hoten: 'Phạm Tuấn Kiệt',
  //   namsinh: 1999,
  //   noisinh: 'TP.HCM',
  // };

  // sinhvienForm = this.fb.group({
  //   Masv: [
  //     '',
  //     [Validators.required, Validators.minLength(10), Validators.maxLength(10)],
  //   ],
  //   Hoten: ['', [Validators.required]],
  //   Namsinh: [
  //     '',
  //     [Validators.required, Validators.min(1993), Validators.max(2000)],
  //   ],
  //   Noisinh: ['', [Validators.required]],
  // });
  // submit = () => {
  //   this.sinhvienForm.setValue({
  //     Masv: this.sinhvien.masv,
  //     Hoten: this.sinhvien.hoten,
  //     Namsinh: this.sinhvien.namsinh,
  //     Noisinh: this.sinhvien.noisinh,
  //   });
  // };

  // get f() {
  //   return this.sinhvienForm.controls;
  // }

  ngOnInit(): void {
    $('#bills').DataTable({
      scrollX: true,
      language: {
        lengthMenu: 'Hiện thị _MENU_',
        zeroRecords: 'Không tìm thấy dữ liệu',
        info: 'Hiện thị trang _PAGE_ của _PAGES_',
        infoEmpty: '',
        infoFiltered: '',
        search: 'Tìm kiếm:',
        paginate: {
          previous: '<<',
          next: '>>',
        },
      },
    });
  }
}
