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
  countEmptyRoom: any;
  countFullRoom: any;

  ngOnInit(): void {
    this.getAll();
  }
  roomForm = new FormGroup({
    loaiphong: new FormControl('--Loại phòng--', Validators.required),
    tinhtrang: new FormControl('--Trạng thái phòng--', Validators.required),
  });

  AddNewRoom = new FormGroup({
    makhu: new FormControl('A', Validators.required),
    map: new FormControl('', Validators.required),
    manv: new FormControl(this.manv, Validators.required),
    loaiphong: new FormControl('0', Validators.required),
    sldango: new FormControl('0', Validators.required),
    sltoida: new FormControl('6', Validators.required),
    ghichu: new FormControl('', Validators.required),
    tinhtrang: new FormControl('0', Validators.required),
  });

  AddNewSubmit = () => {
    this.roomService.create(this.AddNewRoom.value).subscribe(
      (res) => {
        console.log(res);
        this.getAll();
      },
      (error) => {
        console.log(error);
      }
    );
  };

  onSubmit = () => {
    this.filter();
  };

  resetData = () => {
    this.getAll();
  };

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
    this.roomService.getAll().subscribe(
      (data) => {
        console.log(data);
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
      },
      (error) => {
        console.log(error);
      }
    );
  };
  filter = () => {
    this.filterRoom = this.room.filter((item) => {
      if (
        item.LoaiPhong == this.roomForm.value.loaiphong ||
        (item.TinhTrangPhong == this.roomForm.value.tinhtrang &&
          item.LoaiPhong == this.roomForm.value.loaiphong) ||
        item.TinhTrangPhong == this.roomForm.value.tinhtrang
      ) {
        return true;
      }
      return false;
    });
    this.isActive.tatca = !true;
    this.isActive.khuA = !true;
    this.isActive.khuB = !true;
    this.isActive.loc = true;
    // console.log(this.filterRoom);
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

  getStudentInContract = () => {};
}
