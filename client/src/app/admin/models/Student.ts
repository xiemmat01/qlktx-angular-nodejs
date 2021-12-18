import * as moment from 'moment';

export class Student {
  id?: number = 0;
  HoTen?: string;
  NgaySinh?: string;
  Mssv?: string;
  Cmnd?: number;
  DienThoai?: string;
  DiaChi?: string;
  DanToc?: string;
  Phai?: boolean;
  Hinh?: string;
  MaLop?: string;

  // public Student(
  //   HoTen: string,
  //   NgaySinh: string,
  //   Mssv: string,
  //   Cmnd: number,
  //   DienThoai: string,
  //   DiaChi: string,
  //   DanToc: string,
  //   Phai: boolean,
  //   MaLop: string
  // ) {
  //   this.HoTen = HoTen;
  //   this.NgaySinh = moment(NgaySinh).format('DD-MM-YYYY');
  //   this.Mssv = Mssv;
  //   this.Cmnd = Cmnd;
  //   this.DienThoai = DienThoai;
  //   this.DiaChi = DiaChi;
  //   this.DanToc = DanToc;
  //   this.Phai = Phai;
  //   this.MaLop = MaLop;
  // }
}
