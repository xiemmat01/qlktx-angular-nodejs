import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { data } from 'jquery';
import { Contract } from 'src/app/admin/models/Contract';
import { ContractService } from 'src/app/admin/services/contract/contract.service';
import { LopService } from 'src/app/admin/services/lop/lop.service';
import { RoomService } from 'src/app/admin/services/room/room.service';
import { StudentService } from 'src/app/admin/services/student/student.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css'],
})
export class ContractComponent implements OnInit {
  contract: Contract[] = [];
  id?: number = 0;
  room: any = [];
  manv = sessionStorage.getItem('manv');
  tennv = sessionStorage.getItem('tennv');
  Masv: any = [];
  detailroom: any = [];
  lop: any = [];
  constructor(
    private titleService: Title,
    private contractService: ContractService,
    private studentService: StudentService,
    private roomService: RoomService,
    private lopService: LopService
  ) {
    this.titleService.setTitle('Quản lý hợp đồng');
  }
  studentForm = new FormGroup({
    hoten: new FormControl('', Validators.required),
    ngaysinh: new FormControl(new Date('01-01-1998'), Validators.required),
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
    manv: new FormControl(this.manv, [Validators.required]),
    mssv: new FormControl('', [Validators.required]),
    map: new FormControl('--Chọn phòng--', [Validators.required]),
    ngaylap: new FormControl(new Date(), [Validators.required]),
    ngaybatdau: new FormControl(new Date(), [Validators.required]),
    ngayketthuc: new FormControl('', [Validators.required]),
    thoigian_o: new FormControl('6', [Validators.required]),
  });

  ngOnInit(): void {
    this.getAll();
    this.getMaP();
    this.getMasv();
    this.setNgayKetThuc();
    this.getLop();
  }

  onSubmit = () => {
    if (this.studentForm.valid) {
      this.studentService.create(this.studentForm.value).subscribe(
        (res: any) => {
          if (res.length != 0) {
            this.create();
          }
        },
        (error) => {
          console.log(error);
        }
      );
    } else if (this.contractForm.valid) {
      let msv = this.Masv.filter(
        (item: any) => item.Mssv == this.contractForm.value.mssv
      );
      if (msv.length != 0 && this.contractForm.value.mssv == msv[0].Mssv) {
        console.log(true);
        this.create();
      } else {
        alert('Mã sinh viên không tồn tại!! Hãy thêm mới');
      }
    } else {
      alert('Sinh viên này hiện đã có. Vui lòng thêm sinh viên khác!!');
    }
  };

  setNgayKetThuc() {
    //let ngay_bat_dau_o = new Date(this.contractForm.value.ngaybatdau);
    this.contractForm
      .get('ngaybatdau')
      ?.valueChanges.subscribe((selectValue) => {
        let ngay_bat_dau_o = new Date(selectValue);
        this.contractForm.patchValue({
          ngayketthuc: new Date(
            ngay_bat_dau_o.setMonth(
              ngay_bat_dau_o.getMonth() +
                parseInt(this.contractForm.value.thoigian_o)
            )
          ),
        });
      });
    console.log(this.contractForm.value.ngaybatdau);
  }

  selectRowValue = (contract: Contract) => {
    this.contractForm.setValue({
      mahopdong: contract.MaHopDong,
      manv: contract.MaNV,
      mssv: contract.Mssv,
      map: contract.MaP,
      ngaylap: new Date(contract.NgayTaoLap ? contract.NgayTaoLap : ''),
      ngaybatdau: new Date(contract.NgayBatDau ? contract.NgayBatDau : ''),
      ngayketthuc: new Date(contract.NgayKetThuc ? contract.NgayKetThuc : ''),
    });
  };
  getMasv = () => {
    this.studentService.findMasv().subscribe(
      (data) => {
        this.Masv = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  getMaP() {
    this.roomService.getMaP().subscribe(
      (data) => {
        this.room = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getLop() {
    this.lopService.findAll().subscribe((data) => (this.lop = data));
  }
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
    if (
      this.detailroom.length != 0 &&
      this.detailroom[0].SinhVien.Mssv == this.contractForm.value.mssv
    ) {
      return;
    } else {
      this.contractService.create(this.contractForm.value).subscribe(
        (res: any) => {
          alert('Thêm hợp đồng thành công!');
          this.updateRoom();
          this.getAll();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  };
  delete = (id?: string) => {
    this.contractService.delete(id).subscribe(
      (rep) => {
        alert('Xóa hợp đồng thành công');
        this.getAll();
      },
      (error) => {
        console.log(error);
      }
    );
  };
  update = () => {
    this.contractService
      .update(this.contractForm.value.mahopdong, this.contractForm.value)
      .subscribe(
        (res: any) => {
          alert(res.message);
          this.getAll();
        },
        (error) => {
          console.log(error);
        }
      );
  };
  updateRoom = () => {
    let r: any = this.room.filter(
      (item: any) => item.MaP == this.contractForm.value.map
    );
    if (r[0].SLDangO < 6) {
      this.roomService
        .updateSlDangO(this.contractForm.value.map, r[0])
        .subscribe(
          (res: any) => {
            if (res.message) {
              console.log(res.message);
              this.contractForm.setValue({
                mahopdong: '',
                manv: this.manv,
                mssv: '',
                map: '--Chọn phòng--',
                ngaylap: new Date(),
                ngaybatdau: new Date(),
                ngayketthuc: '',
                thoigian_o: '6',
              });
            }
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      alert('Số lượng đầy không thể thêm');
    }
  };
  deleteSlDangO = (id?: string, map?: string) => {
    let r: any = this.room.filter((item: any) => item.MaP == map);
    console.log(r[0]);
    if (r[0].SLDangO != 0) {
      this.roomService.deleteSlDangO(map, r[0]).subscribe(
        (res: any) => {
          if (res.message) {
            this.delete(id);
            console.log(res.message);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      alert('Có lỗi không thể xóa');
    }
  };
  getDetailRoom() {
    let map = this.contractForm.value.map;
    this.contractService.getDetailRoom(map).subscribe((data: any) => {
      this.detailroom = data.filter(
        (item: any) => item.SinhVien.Mssv == this.contractForm.value.mssv
      );
    });
  }
  get f() {
    return this.contractForm.controls;
  }
}
