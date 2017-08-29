import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewEncapsulation } from '@angular/core';

import { AppComponent } from './app.component';
import { CharacterBlobComponent } from './character-blob/character-blob.component';
import { CharacterIconComponent } from './character-blob/character-icon/character-icon.component';
import { ToggleDirective } from './character-blob/character-icon/toggle.directive';
import { TreeComponent } from './tree/tree.component';

import { D3Service } from 'd3-ng2-service'; // <-- import statement

@NgModule({

  declarations: [
    AppComponent,
    CharacterBlobComponent,
    CharacterIconComponent,
    ToggleDirective,
    TreeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
