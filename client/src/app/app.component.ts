import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Website Quản lý ký túc xá';

  isAmin: boolean = true;
  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {
    // this.router.events
    //   .pipe(filter((event: any) => event instanceof NavigationEnd))
    //   .subscribe((event) => {
    //     console.log(event.url);
    //     if (event.url == '/dang-ky-ktx' || event.url == '/') {
    //       this.location.replaceState('/');
    //       this.router.navigate(['dang-ky-ktx']);
    //       this.isAmin = false;
    //     } else {
    //       this.isAmin = true;
    //     }
    //   });
  }
}
