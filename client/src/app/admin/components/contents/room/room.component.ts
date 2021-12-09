import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
})
export class RoomComponent implements OnInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Quản lý phòng');
  }

  ngOnInit(): void {}
}
