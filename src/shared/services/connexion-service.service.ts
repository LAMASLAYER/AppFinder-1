import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ConnexionService {

  constructor(private http: HttpClient) { }

    private getDefaultHeaders(otherHeaders?: {[name: string]: string}): HttpHeaders {
      return new HttpHeaders(otherHeaders);
    }

    protected _get(url: string, params?: HttpParams, responseType: 'json' | 'text' = 'json'): Observable<any> {
      return this.http.get(url, { headers: this.getDefaultHeaders(), params: params, responseType: <any>responseType });
    }

    protected _put(url: string, data: any): Observable<any> {
      return this.http.put(url, data, { headers: this.getDefaultHeaders() });
    }

    protected _post(url: string, data: any, headers: {[name: string]: string} = {} ): Observable<any> {
      return this.http.post(url, data, { headers: this.getDefaultHeaders(headers) });
    }

    protected _delete(url: string, params?: HttpParams): Observable<any> {
      return this.http.delete(url, { headers: this.getDefaultHeaders(), params: params });
    }
}
