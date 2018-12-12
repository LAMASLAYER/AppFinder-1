import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Abilities} from '../models/abilities';
import {CharAbilities} from '../models/charAbilities';
import { ConnexionService } from '../../../shared/services/connexion-service.service';


@Injectable()
export class AbilitiesService extends ConnexionService {

  public getAbilities(): Observable<Array<Abilities>> {
    return this._get(`${environment.baseURL}/abilities/all`)
      .pipe(res => {
        return res;
    });
  }

  public getModifier(value: number): Observable<number> {
    // check value for avoid SQLinject
    return this._get(`${environment.baseURL}/modifierTable/modifierTableId/` + value)
    .pipe(res => {
      return res;
    });
  }

  private getAbilityId(charId: number, abilityId: number): Observable<CharAbilities> {
    // check parameters here to
    return this._get(`${environment.baseURL}/charAbilities/charId/` + charId + '/abilityId/' + abilityId)
      .pipe(res => {
        return res;
      });
  }

  // public updateAbilities(charAbilities: CharAbilities): void {
  //   this.getAbilityId(charAbilities.charId, charAbilities.abilityId).subscribe(
  //     (res: CharAbilities) => {
  //       this.updateRow(res.charAbilityId, charAbilities).subscribe();
  //     }
  //   );
  // }

  // public updateRow(charAbilityId: number, charAbilities: CharAbilities): Observable<CharAbilities> {
  //   charAbilities.charAbilityId = charAbilityId;
  //   return this.http.post<CharAbilities>(environment.baseURL + '/charAbilities/post', charAbilities);
  // }

}
