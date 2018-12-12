import { Injectable } from '@angular/core';
import {Skills} from '../models/skills';
import { environment } from '../../../environments/environment';
import {Observable} from 'rxjs';
import { ConnexionService } from '../../../shared/services/connexion-service.service';

@Injectable()
export class SkillsService extends ConnexionService {

  public getAllSkills(): Observable<Array<Skills>> {
    return this._get(`${environment.baseURL}/skills/all`)
      .pipe(
        res => {
          return res;
        }
      );
  }
}
