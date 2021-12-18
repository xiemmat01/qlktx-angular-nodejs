import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../../models/Room';
import { NODE_API_SERVER } from '../../config/api';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<Room[]> {
    return this.http.get<Room[]>(NODE_API_SERVER + '/phong');
  }
  findOne(hoten: any, mssv: any): Observable<Room> {
    return this.http.get(
      `${NODE_API_SERVER}${'/phong'}/${hoten ? hoten : mssv}`
    );
  }
  create(data: any): Observable<Room> {
    return this.http.post(NODE_API_SERVER + '/phong', data);
  }
  update(id: any, data: any): Observable<Room> {
    return this.http.put(`${NODE_API_SERVER}/phong/${id}`, data);
  }
  delete(id?: number): Observable<Room> {
    return this.http.delete(`${NODE_API_SERVER}/phong/${id}`);
  }
}
