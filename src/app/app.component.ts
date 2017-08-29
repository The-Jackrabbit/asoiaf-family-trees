import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  treeData = [
  {
    'name': 'Top Level',
    'parent': 'null',
    'children': [
      {
        'name': 'Level 2: A',
        'parent': 'Top Level',
        'children': [
          {
            'name': 'Son of A',
            'parent': 'Level 2: A'
          },
          {
            'name': 'Daughter of A',
            'parent': 'Level 2: A'
          }
        ]
      },
      {
        'name': 'Level 2: B',
        'parent': 'Top Level'
      }
    ]
  }
];
}
