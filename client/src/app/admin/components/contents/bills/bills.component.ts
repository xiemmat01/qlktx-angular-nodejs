import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Bill } from 'src/app/admin/models/Bill';
import { BillService } from 'src/app/admin/services/bill/bill.service';
import { RoomService } from 'src/app/admin/services/room/room.service';
import {
  CompareChiSoDien,
  CompareChiSoNuoc,
} from './customvalidator.validator';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css'],
})
export class BillsComponent implements OnInit {
  constructor(
    private titleService: Title,
    private roomService: RoomService,
    private billService: BillService,
    private formBuilder: FormBuilder
  ) {
    this.titleService.setTitle('Quản lý tiền điện nước');
  }
  ngOnInit(): void {
    this.getRoom();
    this.getBill();
  }
  maphong: any = [];
  tong_tien: number = 0;
  bills: Bill[] = [];
  manv = sessionStorage.getItem('manv');
  tennv = sessionStorage.getItem('tennv');
  ma_hd: number = 0;
  giatiendien = 10000;
  giatiennuoc = 2000;
  billForm = this.formBuilder.group(
    {
      map: ['', [Validators.required]],
      chisodiendau: ['', [Validators.required]],
      chisodiencuoi: ['', [Validators.required]],
      chisonuocdau: ['', [Validators.required]],
      chisonuoccuoi: ['', [Validators.required]],
      giatiendien: ['10000', [Validators.required]],
      giatiennuoc: ['2000', [Validators.required]],
      tongtien: [''],
      manv: [this.manv],
    },
    {
      validator: [
        CompareChiSoDien('chisodiendau', 'chisodiencuoi'),
        CompareChiSoNuoc('chisonuocdau', 'chisonuoccuoi'),
      ],
    }
  );
  updateBillForm = this.formBuilder.group(
    {
      map: ['', [Validators.required]],
      chisodiendau: ['', [Validators.required]],
      chisodiencuoi: ['', [Validators.required]],
      chisonuocdau: ['', [Validators.required]],
      chisonuoccuoi: ['', [Validators.required]],
      tongtien: [''],
      manv: [this.manv],
    },
    {
      validator: [
        CompareChiSoDien('chisodiendau', 'chisodiencuoi'),
        CompareChiSoNuoc('chisonuocdau', 'chisonuoccuoi'),
      ],
    }
  );
  BillSubmit = () => {
    this.createBill();
  };
  getRoom = () => {
    this.roomService.getMaP().subscribe(
      (data: any) => {
        this.maphong = data;
      },
      (error) => {
        console.log(error);
      }
    );
  };
  getBill = () => {
    this.billService.findAll().subscribe((res) => (this.bills = res));
  };
  createBill = () => {
    this.billService.create(this.billForm.value).subscribe(
      (res: any) => {
        if (res.message) {
          alert(res.message);
          this.tong_tien = 0;
          this.billForm.reset();
          this.getBill();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };
  updateBill() {}

  deleteBill(mahd?: number) {
    this.billService.delete(mahd).subscribe((res: any) => {
      alert(res.message);
      this.getBill();
    });
  }

  selectRow(bill: Bill) {
    this.updateBillForm.patchValue({
      mahd: bill.MaHD,
      map: bill.MaP,
      chisodiendau: bill.ChiSoDienDau,
      chisodiencuoi: bill.ChiSoDienCuoi,
      chisonuocdau: bill.ChiSoNuocDau,
      chisonuoccuoi: bill.ChiSoNuocCuoi,
      tongtien: bill.TongTien,
      manv: bill.MaNV,
    });
  }
  isChange = () => {
    if (
      this.billForm.value.chisodiendau != '' &&
      this.billForm.value.chisodiencuoi != '' &&
      this.billForm.value.chisonuocdaus != '' &&
      this.billForm.value.chisonuoccuoi != '' &&
      this.billForm.valid
    ) {
      this.TotalMoney();
    }
  };
  TotalMoney = () => {
    let chisodien =
      (this.billForm.value.chisodiencuoi - this.billForm.value.chisodiendau) *
      this.giatiendien;
    let chisonuoc =
      (this.billForm.value.chisonuoccuoi - this.billForm.value.chisonuocdau) *
      this.giatiennuoc;

    this.tong_tien = chisodien + chisonuoc;
    this.billForm.get('tongtien')?.setValue(this.tong_tien);
    console.log(this.billForm.value.tongtien);
  };

  get f() {
    return this.billForm.controls;
  }
}
