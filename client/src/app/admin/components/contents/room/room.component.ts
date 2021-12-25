import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Room } from 'src/app/admin/models/Room';
import { RoomService } from 'src/app/admin/services/room/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
})
export class RoomComponent implements OnInit {
  constructor(private titleService: Title, private roomService: RoomService) {
    this.titleService.setTitle('Quản lý phòng');
  }

  khunha: any = [];
  filterRoom: any = [];
  room: Room[] = [];
  isActive = { khuA: false, khuB: false, loc: false, tatca: false };
  manv = sessionStorage.getItem('manv');
  tennv = sessionStorage.getItem('tennv');
  countEmptyRoom: any;
  countFullRoom: any;
  setMaP: any;
  detailRoom: any;

  ngOnInit(): void {
    this.getAll();
  }
  roomForm = new FormGroup({
    loaiphong: new FormControl('--Loại phòng--', Validators.required),
    tinhtrang: new FormControl('--Trạng thái phòng--', Validators.required),
  });

  AddNewRoom = new FormGroup({
    makhu: new FormControl('--Chọn Khu--', Validators.required),
    map: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),
    ]),
    manv: new FormControl(this.manv, Validators.required),
    loaiphong: new FormControl('0', Validators.required),
    sldango: new FormControl('0', [Validators.required, Validators.max(6)]),
    sltoida: new FormControl('6', Validators.required),
    ghichu: new FormControl('', Validators.required),
    tinhtrang: new FormControl('0', Validators.required),
  });
  // submit
  onSubmit = () => {
    this.filter();
  };
  // reset data
  resetData = () => {
    this.getAll();
    this.roomForm.patchValue({
      loaiphong: '--Loại phòng--',
      tinhtrang: '--Trạng thái phòng--',
    });
  };
  // khi chon select
  OnChange = () => {
    this.setMaP = this.room
      .filter((item) => item.MaKhu === this.AddNewRoom.value.makhu)
      .reverse();
    console.log(this.setMaP);
    if (this.AddNewRoom.value.makhu == 'A') {
      this.AddNewRoom.patchValue({
        map: this.setMaP.at(0).MaP,
      });
    } else {
      this.AddNewRoom.patchValue({
        map: this.setMaP.at(0).MaP,
      });
    }
  };
  // khi nhap sldango
  SlDangO_InputChang = () => {
    if (this.AddNewRoom.value.sldango == '6') {
      this.AddNewRoom.patchValue({
        tinhtrang: '1',
      });
    }
  };
  // them moi phong
  AddNewSubmit = () => {
    this.roomService.create(this.AddNewRoom.value).subscribe(
      (res: any) => {
        // console.log(res);
        if (res.message) {
          alert(res.message);
        } else {
          this.getAll();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };
  // cac ham su ly data
  getKhuA(khu: any) {
    this.khunha = this.room.filter((item) => item.MaKhu === khu);
    this.isActive.tatca = !true;
    this.isActive.khuA = true;
    this.isActive.khuB = !true;
    this.isActive.loc = !true;
  }
  getKhuB(khu: any) {
    this.khunha = this.room.filter((item) => item.MaKhu === khu);
    this.isActive.tatca = !true;
    this.isActive.khuA = !true;
    this.isActive.khuB = true;
    this.isActive.loc = !true;
  }
  getAll = () => {
    this.filterRoom = [];
    this.roomService.getAll().subscribe(
      (data) => {
        // console.log(data);
        this.room = data;
        this.isActive.tatca = true;
        this.isActive.khuA = !true;
        this.isActive.khuB = !true;
        this.isActive.loc = !true;
        this.countEmptyRoom = this.room.filter(
          (item) => item.TinhTrangPhong == 0
        ).length;
        this.countFullRoom = this.room.filter(
          (item) => item.TinhTrangPhong == 1
        ).length;
        console.log(this.countFullRoom);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  filter = () => {
    this.filterRoom = this.room.filter((item) => {
      if (
        item.TinhTrangPhong == this.roomForm.value.tinhtrang &&
        item.LoaiPhong == this.roomForm.value.loaiphong
      ) {
        return true;
      }
      return false;
    });
    this.isActive.tatca = !true;
    this.isActive.khuA = !true;
    this.isActive.khuB = !true;
    this.isActive.loc = true;
    console.log(this.filterRoom);
  };
  delete = (id?: number) => {
    this.roomService.delete(id).subscribe(
      (rep) => {
        alert(rep);
        this.getAll();
      },
      (error) => {
        console.log(error);
      }
    );
  };
  update = (id?: any) => {
    this.roomService.update(id, this.AddNewRoom.value).subscribe(
      (rep) => {
        alert(rep);
        this.getAll();
      },
      (error) => {
        console.log(error);
      }
    );
  };
  getMaP = () => {
    this.roomService.getMaP().subscribe(
      (data: any) => {
        this.setMaP = data.reverse().at(0);
        console.log(this.setMaP);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  selectRoom(map: any) {
    this.roomService.getDetailRoom(map).subscribe(
      (data: any) => {
        if (data.length != 0) {
          this.detailRoom = data;
        }
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  get f() {
    return this.AddNewRoom.controls;
  }
}
