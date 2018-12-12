import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Character} from '../models/character';
import { environment } from '../../../environments/environment';
import { ConnexionService } from '../../../shared/services/connexion-service.service';

@Injectable()
export class CharactersService extends ConnexionService {

  public getCharacter(id: number): Observable<Character> {
    return this._get(`${environment.baseURL}/charBuilder/charId/` + id)
      .pipe(res => {
        return res;
      });
  }
}
