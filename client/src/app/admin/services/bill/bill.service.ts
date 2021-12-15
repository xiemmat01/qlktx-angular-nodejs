import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bill } from '../../models/Bill';
import { NODE_API_SERVER } from '../../config/api';

@Injectable({
  providedIn: 'root',
})
export class BillService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<Bill[]> {
    return this.http.get<Bill[]>(NODE_API_SERVER + 'hoa-don');
  }
}
