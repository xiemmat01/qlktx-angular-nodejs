import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Contract } from 'src/app/admin/models/Contract';
import { ContractService } from 'src/app/admin/services/contract/contract.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css'],
})
export class ContractComponent implements OnInit {
  contract: Contract[] = [];
  id?: number = 0;
  constructor(
    private titleService: Title,
    private contractService: ContractService
  ) {
    this.titleService.setTitle('Quản lý hợp đồng');
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
  contractForm = new FormGroup({
    mahopdong: new FormControl('', [Validators.required]),
    manv: new FormControl('', [Validators.required]),
    mssv: new FormControl('', [Validators.required]),
    map: new FormControl('', [Validators.required]),
    ngaylap: new FormControl(new Date(), [Validators.required]),
    ngaybatdau: new FormControl(new Date(), [Validators.required]),
    ngayketthuc: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {
    this.getAll();
  }
  onSubmit = () => {
    this.create();
  };

  selectRowValue = (contract: Contract) => {
    this.id = contract.id;
    this.contractForm.setValue({
      mahopdong: contract.MaHopDong,
      manv: contract.MaNV,
      mssv: contract.Mssv,
      map: contract.MaP,
      ngaylap: contract.NgayLap,
      ngaybatdau: contract.NgayBatDau,
      ngayketthuc: contract.NgayKetThuc,
    });
  };

  getAll = () => {
    this.contractService.findAll().subscribe(
      (data) => {
        this.contract = data;
      },
      (error) => {
        console.log(error);
      }
    );
  };
  create = () => {
    this.contractService.create(this.contractForm.value).subscribe(
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
    this.contractService.delete(id).subscribe(
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
    this.contractService.update(this.id, this.contractForm.value).subscribe(
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
    return this.contractForm.controls;
  }
}
