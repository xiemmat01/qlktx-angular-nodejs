import { Component, OnInit } from '@angular/core';
import { DkthueService } from 'src/app/admin/services/dangkythue/dkthue.service';

@Component({
  selector: 'app-dangkythue',
  templateUrl: './dangkythue.component.html',
  styleUrls: ['./dangkythue.component.css'],
})
export class DangkythueComponent implements OnInit {
  constructor(private dkthue: DkthueService) {}

  dsDangKyThue: any = [];
  ngOnInit(): void {
    this.dkthue.currentData.subscribe((data) => (this.dsDangKyThue = data));
    console.log(this.dsDangKyThue);
  }
  selectRowValue(item: any) {}
  delete(id: any) {}
}
