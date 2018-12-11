import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Character} from '../../models/character';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) {}

  public getCharacter(id: number): Observable<Character> {
    return this.http.get<Character>(environment.baseURL + '/charBuilder/charId/' + id)
      .pipe(res => {
        return res;
      });
  }
}
