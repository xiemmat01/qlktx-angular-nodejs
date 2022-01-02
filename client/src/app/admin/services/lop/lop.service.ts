import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NODE_API_SERVER } from '../../config/api';
import { Lop } from '../../models/Class';

@Injectable({
  providedIn: 'root',
})
export class LopService {
  constructor(private http: HttpClient) {}
  findAll(): Observable<Lop[]> {
    return this.http.get<Lop[]>(NODE_API_SERVER + '/lop');
  }
  create(data: any): Observable<Lop> {
    return this.http.post(NODE_API_SERVER + '/lop', data);
  }
  update(id: any, data: any): Observable<Lop> {
    return this.http.put(`${NODE_API_SERVER}/lop/${id}`, data);
  }
  delete(id?: any): Observable<Lop> {
    return this.http.delete(`${NODE_API_SERVER}/lop/${id}`);
  }
}
