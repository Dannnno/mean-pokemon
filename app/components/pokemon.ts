import { Component } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'pokemon',
  templateUrl: 'app/templates/pokemon.component.html'
})
export class PokemonComponent {
    mon: Pokemon = new Pokemon("Bulbasaur", 1, 5, ['Tackle', 'Tail Whip'], [10, 10, 10, 10, 10, 10], "https://duckduckgo.com/i/8492db92.png", "https://duckduckgo.com/i/8492db92.png");
}
