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
    return this.http.get<Student[]>(NODE_API_SERVER + 'sinh-vien');
  }
  findOne(hoten: any, mssv: any): Observable<Student> {
    return this.http.get(
      `${NODE_API_SERVER}${'sinh-vien'}/${hoten ? hoten : mssv}`
    );
  }
  create(data: any): Observable<Student> {
    return this.http.post(NODE_API_SERVER + 'sinh-vien', data);
  }
}
