import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Lop } from 'src/app/admin/models/Class';
import { Khoa } from 'src/app/admin/models/Department';
import { KhoaService } from 'src/app/admin/services/khoa/khoa.service';
import { LopService } from 'src/app/admin/services/lop/lop.service';

@Component({
  selector: 'app-lop',
  templateUrl: './lop.component.html',
  styleUrls: ['./lop.component.css'],
})
export class LopComponent implements OnInit {
  lop: Lop[] = [];
  khoa: Khoa[] = [];
  isupdate: boolean = false;
  constructor(
    private titleService: Title,
    private lopService: LopService,
    private khoaService: KhoaService
  ) {
    this.titleService.setTitle('Quản lý lớp');
  }

  ngOnInit(): void {
    this.getAll();
    this.getKhoa();
  }
  lopForm = new FormGroup({
    makhoa: new FormControl('', Validators.required),
    malop: new FormControl('', Validators.required),
    tenlop: new FormControl('', Validators.required),
  });
  onSubmit() {
    this.create();
  }

  getAll() {
    this.lopService.findAll().subscribe((data) => (this.lop = data));
  }
  getKhoa() {
    this.khoaService.findAll().subscribe((data) => (this.khoa = data));
  }
  create() {
    this.lopService.create(this.lopForm.value).subscribe((res) => {
      console.log(res);
      this.lopForm.reset();
      this.getAll();
    });
  }
  update() {
    this.isupdate = false;
    this.lopForm.reset();
  }
  selectRowValue(lop: Lop) {
    this.isupdate = true;
    this.lopForm.setValue({
      malop: lop.MaLop,
      makhoa: lop.MaKhoa,
      tenlop: lop.TenLop,
    });
  }

  delete(id: any) {
    this.lopService.delete(id).subscribe((res: any) => {
      alert(res.message);
      this.getAll();
    });
  }

  cancel() {
    this.isupdate = false;
    this.lopForm.reset();
  }
}
