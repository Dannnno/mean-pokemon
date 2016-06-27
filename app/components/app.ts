import { Component } from '@angular/core';

import { SingleBattleComponent } from './single-battle';

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/app.component.html',
  directives: [SingleBattleComponent]
})
export class AppComponent {
  constructor() { }
}
