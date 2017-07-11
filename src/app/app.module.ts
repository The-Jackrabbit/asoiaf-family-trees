import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CharacterBlobComponent } from './character-blob/character-blob.component';
import { CharacterIconComponent } from './character-blob/character-icon/character-icon.component';
import { ToggleDirective } from './character-blob/character-icon/toggle.directive';

@NgModule({
  declarations: [
    AppComponent,
    CharacterBlobComponent,
    CharacterIconComponent,
    ToggleDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
