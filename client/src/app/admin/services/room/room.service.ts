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

  getAll(): Observable<Room[]> {
    return this.http.get<Room[]>(NODE_API_SERVER + '/phong');
  }
  getCount() {
    return this.http.get(NODE_API_SERVER + '/phong/sl');
  }
  findByHouse(khu: any) {
    return this.http.get(`${NODE_API_SERVER}/khu-nha/${khu}`);
  }
  filter(data: any): Observable<Room> {
    return this.http.put(`${NODE_API_SERVER}${'/phong'}`, data);
  }
  create(data: any): Observable<Room> {
    return this.http.post(NODE_API_SERVER + '/phong', data);
  }
  update(id: any, data: any): Observable<Room> {
    return this.http.put(`${NODE_API_SERVER}/phong/${id}`, data);
  }
  delete(id?: any): Observable<Room> {
    return this.http.delete(`${NODE_API_SERVER}/phong/${id}`);
  }
}
