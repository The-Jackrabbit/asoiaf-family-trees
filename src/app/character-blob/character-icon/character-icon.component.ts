import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-character-icon',
  templateUrl: './character-icon.component.html',
  styleUrls: ['./character-icon.component.css']
})
export class CharacterIconComponent implements OnInit {
  @Output() view;
  constructor() { }

  toggleView() {

  }

  ngOnInit() {
  }

}
