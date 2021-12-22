import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../../models/Employee';
import { NODE_API_SERVER } from '../../config/api';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(NODE_API_SERVER + '/nhan-vien');
  }
  findOne(hoten: any, mssv: any): Observable<Employee> {
    return this.http.get(
      `${NODE_API_SERVER}${'/nhan-vien'}/${hoten ? hoten : mssv}`
    );
  }
  create(data: any): Observable<Employee> {
    return this.http.post(NODE_API_SERVER + '/nhan-vien', data);
  }
  update(manv: any, data: any): Observable<Employee> {
    return this.http.put(`${NODE_API_SERVER}/nhan-vien/${manv}`, data);
  }
  delete(manv?: string): Observable<Employee> {
    return this.http.delete(`${NODE_API_SERVER}/nhan-vien/${manv}`);
  }
}
