import * as moment from 'moment';

export class Student {
  HoTen?: string;
  NgaySinh?: string;
  Mssv?: string;
  Cmnd?: number;
  DienThoai?: string;
  DiaChi?: string;
  DanToc?: string;
  GioiTinh?: number;
  Hinh?: string;
  MaLop?: string;

  constructor(
    HoTen: string,
    NgaySinh: string,
    Mssv: string,
    Cmnd: number,
    DienThoai: string,
    DiaChi: string,
    DanToc: string,
    GioiTinh: number,
    MaLop: string
  ) {
    this.HoTen = HoTen;
    this.NgaySinh = moment(NgaySinh).format('DD/MM/YYYY');
    this.Mssv = Mssv;
    this.Cmnd = Cmnd;
    this.DienThoai = DienThoai;
    this.DiaChi = DiaChi;
    this.DanToc = DanToc;
    this.GioiTinh = GioiTinh;
    this.MaLop = MaLop;
  }
}
