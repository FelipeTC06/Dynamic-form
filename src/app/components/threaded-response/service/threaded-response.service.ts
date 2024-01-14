import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThreadedResponse } from '../model/threaded-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThreadedResponseService {
  private url: string = `${environment.BaseUrl}/threaded`;

  constructor(
    private http: HttpClient
  ) { }

  public createThreadedItem(data: ThreadedResponse) {
    return this.http.post(this.url, data);
  }

  public getAllThreadedItem(): Observable<ThreadedResponse[]> {
    return this.http.get<ThreadedResponse[]>(this.url);
  }

  public getThreadedItemById(id: number): Observable<ThreadedResponse[]> {
    return this.http.get<ThreadedResponse[]>(`${this.url}/${id}`);
  }

  public updateItem(data: ThreadedResponse, id: number) {
    return this.http.put(`${this.url}/${id}`, data);
  }

  public deleteItem(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

}
