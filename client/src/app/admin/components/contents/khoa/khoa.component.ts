import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Khoa } from 'src/app/admin/models/Department';
import { KhoaService } from 'src/app/admin/services/khoa/khoa.service';

@Component({
  selector: 'app-khoa',
  templateUrl: './khoa.component.html',
  styleUrls: ['./khoa.component.css'],
})
export class KhoaComponent implements OnInit {
  khoa: Khoa[] = [];
  isupdate: boolean = false;
  constructor(private titleService: Title, private khoaService: KhoaService) {
    this.titleService.setTitle('Quản lý khoa');
  }

  ngOnInit(): void {
    this.getAll();
  }

  khoaForm = new FormGroup({
    makhoa: new FormControl('', Validators.required),
    tenkhoa: new FormControl('', Validators.required),
  });

  onSubmit() {
    this.create();
  }

  getAll() {
    this.khoaService.findAll().subscribe((data) => (this.khoa = data));
  }
  create() {
    this.khoaService.create(this.khoaForm.value).subscribe((res) => {
      console.log(res);
      this.khoaForm.reset();
      this.getAll();
    });
  }
  update() {
    this.isupdate = false;
    this.khoaForm.reset();
  }
  selectRowValue(khoa: Khoa) {
    this.isupdate = true;
    this.khoaForm.setValue({ makhoa: khoa.MaKhoa, tenkhoa: khoa.TenKhoa });
  }

  delete(id: any) {
    this.khoaService.delete(id).subscribe((res: any) => {
      alert(res.message);
      this.getAll();
    });
  }

  cancel() {
    this.isupdate = false;
    this.khoaForm.reset();
  }
}
