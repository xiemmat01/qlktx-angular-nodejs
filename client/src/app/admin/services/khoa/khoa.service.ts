import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NODE_API_SERVER } from '../../config/api';
import { Khoa } from '../../models/Department';

@Injectable({
  providedIn: 'root',
})
export class KhoaService {
  constructor(private http: HttpClient) {}
  findAll(): Observable<Khoa[]> {
    return this.http.get<Khoa[]>(NODE_API_SERVER + '/khoa');
  }
  create(data: any): Observable<Khoa> {
    return this.http.post(NODE_API_SERVER + '/khoa', data);
  }
  update(id: any, data: any): Observable<Khoa> {
    return this.http.put(`${NODE_API_SERVER}/khoa/${id}`, data);
  }
  delete(id?: any): Observable<Khoa> {
    return this.http.delete(`${NODE_API_SERVER}/khoa/${id}`);
  }
}
