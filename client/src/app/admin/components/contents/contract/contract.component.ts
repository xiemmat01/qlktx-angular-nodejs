import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css'],
})
export class ContractComponent implements OnInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Quản lý hợp đồng');
  }

  ngOnInit(): void {}
}
