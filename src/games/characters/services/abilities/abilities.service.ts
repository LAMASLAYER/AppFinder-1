import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {Abilities} from '../../models/abilities';
import {HttpClient} from '@angular/common/http';
import {CharAbilities} from '../../models/charAbilities';


@Injectable({
  providedIn: 'root'
})
export class AbilitiesService {

  constructor(private http: HttpClient) {}

  public getAbilities(): Observable<Array<Abilities>> {
    return this.http.get<Array<Abilities>>(environment.baseURL + '/abilities/all')
      .pipe(res => {
        return res;
    });
  }

  public getModifier(value: number): Observable<number> {
    return this.http.get<number>(environment.baseURL + '/modifierTable/modifierTableId/' + value)
      .pipe(res => {
        return res;
      });
  }

  private getAbilityId(charId: number, abilityId: number): Observable<CharAbilities> {
    return this.http.get<CharAbilities>(environment.baseURL + '/charAbilities/charId/' + charId + '/abilityId/' + abilityId)
      .pipe(res => {
        return res;
      });
  }

  public updateAbilities(charAbilities: CharAbilities): void {
    this.getAbilityId(charAbilities.charId, charAbilities.abilityId).subscribe(
      (res: CharAbilities) => {
        this.updateRow(res.charAbilityId, charAbilities).subscribe();
      }
    );
  }

  public updateRow(charAbilityId: number, charAbilities: CharAbilities): Observable<CharAbilities> {
    charAbilities.charAbilityId = charAbilityId;
    return this.http.post<CharAbilities>(environment.baseURL + '/charAbilities/post', charAbilities);
  }

}
