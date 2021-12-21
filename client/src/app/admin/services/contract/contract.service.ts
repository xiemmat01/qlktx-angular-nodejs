import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contract } from '../../models/Contract';
import { NODE_API_SERVER } from '../../config/api';
@Injectable({
  providedIn: 'root',
})
export class ContractService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<Contract[]> {
    return this.http.get<Contract[]>(NODE_API_SERVER + '/hop-dong');
  }
  // findOne(hoten: any, mssv: any): Observable<Contract> {
  //   return this.http.get(
  //     `${NODE_API_SERVER}${'/hop-dong'}/${hoten ? hoten : mssv}`
  //   );
  // }
  create(data: any): Observable<Contract> {
    return this.http.post(NODE_API_SERVER + '/hop-dong', data);
  }
  update(id: any, data: any): Observable<Contract> {
    return this.http.put(`${NODE_API_SERVER}/hop-dong/${id}`, data);
  }
  delete(id?: number): Observable<Contract> {
    return this.http.delete(`${NODE_API_SERVER}/hop-dong/${id}`);
  }
}
