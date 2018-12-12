import { AbilitiesService } from './abilities.service';
import { CharactersService } from './characters.service';
import { SkillsService } from './skills.service';


export const CharactersServices = [
  AbilitiesService,
  CharactersService,
  SkillsService
];

export * from './skills.service';
export * from './characters.service';
export  * from './abilities.service';
