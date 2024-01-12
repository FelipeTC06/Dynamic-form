import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThreadedResponse } from '../model/threaded-response';

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

    public getAllThreadedItem() {
      return this.http.get(this.url);
    }

}
