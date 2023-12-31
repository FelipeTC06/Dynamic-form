import { environment } from './../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SimpleResponse } from '../models/simple-response';

@Injectable({
  providedIn: 'root',
})
export class SimpleResponseService {
  private url: string = `${environment.BaseUrl}/simple`;

  constructor(
    private http: HttpClient
  ) { }

  public createForm(data: SimpleResponse) {
    return this.http.post(this.url, data);
  }

  public getAllItems() {
    return this.http.get(this.url);
  }

  public getItemById(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  public updateItem(data: SimpleResponse, id: number) {
    return this.http.put(`${this.url}/${id}`, data);
  }

  public deleteItem(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

}
