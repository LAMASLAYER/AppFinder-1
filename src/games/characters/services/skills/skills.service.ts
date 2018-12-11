import { Injectable } from '@angular/core';
import {Skills} from '../../models/skills';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http: HttpClient) {}

  public getAllSkills(): Observable<Array<Skills>> {
    return this.http.get<Array<Skills>>(environment.baseURL + '/skills/all')
      .pipe(
        res => {
          return res;
        }
      );
  }
}
