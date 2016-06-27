import { Component } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { Trainer } from '../models/trainer';

@Component({
      selector: 'single-battle',
      templateUrl: 'app/templates/single-battle.component.html'
})
export class SingleBattleComponent {
    yourMon: Pokemon = new Pokemon("Bulbasaur", 1, 5, ['Tackle', 'Tail Whip'], [10, 10, 10, 10, 10, 10], "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fimg.pokemondb.net%2Fsprites%2Fyellow%2Fnormal%2Fbulbasaur-color.png&f=1", "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fimg.pokemondb.net%2Fsprites%2Fgold%2Fback-normal%2Fbulbasaur.png&f=1");
    you: Trainer = new Trainer("Dan");
    enemyMon: Pokemon = new Pokemon("Rattata", 1, 5, ['Tackle', 'Tail Whip'], [10, 10, 10, 10, 10, 10], "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fimg.pokemondb.net%2Fsprites%2Fblack-white%2Fback-normal%2Frattata.png&f=1", "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fimg.pokemondb.net%2Fsprites%2Fgold%2Fshiny%2Frattata.png&f=1");
    enemyTrainer: Trainer = new Trainer("Youngster Joey");
}
