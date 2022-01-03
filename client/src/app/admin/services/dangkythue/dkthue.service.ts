import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DkthueService {
  constructor() {}
  public editDataDetails: any = [];
  public subject = new Subject<any>();

  private dataSource = new BehaviorSubject(this.editDataDetails);
  currentData = this.dataSource.asObservable();
  addData(data: any) {
    this.dataSource.next([data]);
  }
}
