import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-blob',
  templateUrl: './character-blob.component.html',
  styleUrls: ['./character-blob.component.css']
})
export class CharacterBlobComponent implements OnInit {
  first_name = 'Daenarys';
  last_name = 'Targaryen';
  constructor() { }

  ngOnInit() {
  }

}
