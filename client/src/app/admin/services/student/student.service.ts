import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../../models/Student';
import { NODE_API_SERVER } from '../../config/api';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<Student[]> {
    return this.http.get<Student[]>(NODE_API_SERVER + '/sinh-vien');
  }
  findMasv(): Observable<Student[]> {
    return this.http.get<Student[]>(`${NODE_API_SERVER}${'/sinh-vien'}/mssv`);
  }
  findFilter(hoten: any, mssv: any): Observable<Student> {
    return this.http.get(
      `${NODE_API_SERVER}${'/sinh-vien'}/${hoten ? hoten : mssv}`
    );
  }
  create(data: any): Observable<Student> {
    return this.http.post(NODE_API_SERVER + '/sinh-vien', data);
  }
  update(id: any, data: any): Observable<Student> {
    return this.http.put(`${NODE_API_SERVER}/sinh-vien/${id}`, data);
  }
  delete(id?: any): Observable<Student> {
    return this.http.delete(`${NODE_API_SERVER}/sinh-vien/${id}`);
  }
}
