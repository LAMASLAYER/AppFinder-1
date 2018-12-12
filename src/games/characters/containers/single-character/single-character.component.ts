import { Component, OnInit, OnDestroy } from '@angular/core';
import { CharactersService } from '../../services';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { isNil } from 'lodash';
import { Character } from '../../models/character';
@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.scss']
})
export class SingleCharacterComponent implements OnInit, OnDestroy {

  private paramsSubscription: Subscription;
  private characterSubscription: Subscription;
  private id: number;
  public character: Character;
  public characterString: string;
  public wait = true;

  constructor(private characterService: CharactersService, private activeRoute: ActivatedRoute, private router: Router) {
    this.paramsSubscription = this.activeRoute.params.subscribe( param => {
      let id = param.id ? param.id : null;
      id -= 0;
      if (!isNil(id) && Number.isInteger(id)) {
        this.id = id;
      }
    });
  }

  ngOnInit() {
    if (!isNil(this.id) ) {
      this.characterService.getCharacter(this.id).subscribe(character => {
        this.character = character;
      }
      , err => console.error(err)
      , () => {setTimeout( () => {
        this.characterString = JSON.stringify(this.character);
        this.wait = false;
      }, 3000); }
      );
    }

  }
  ngOnDestroy() {

    if (this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }
    if (this.characterSubscription) {
      this.characterSubscription.unsubscribe();
    }
  }
  public backHome() {
    console.log('back home');
    this.router.navigate(['home']);
  }

}
