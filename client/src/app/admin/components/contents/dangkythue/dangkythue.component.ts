import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dangkythue',
  templateUrl: './dangkythue.component.html',
  styleUrls: ['./dangkythue.component.css'],
})
export class DangkythueComponent implements OnInit {
  constructor() {}
  dkthue: any = [];
  dsThue: any = [];
  ngOnInit(): void {
    this.dkthue = [localStorage.getItem('dangkythue')];
    this.dsThue = [...this.dkthue];
    console.log(this.dsThue);
  }
}
