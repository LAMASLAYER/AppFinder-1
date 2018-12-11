import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  links: string[];
  constructor() {
    this.links = [];
   }

  ngOnInit() {
    this.links.push('games');
  }

}
