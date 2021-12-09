import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Website Quản lý ký túc xá';
  currentRoute: string = '';

  constructor(private router: Router) {
    console.log(router.url);
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event) => {
        console.log(event.id);
        switch (event.url) {
          case '/':
            this.currentRoute = 'ABC';
            break;
          case '/sinh-vien':
            this.currentRoute = 'Quản lý sinh viên';
            break;

          default:
            break;
        }
      });
  }
}
