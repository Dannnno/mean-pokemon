import { Component, Input } from '@angular/core';

@Component({
  selector: 'pokemon',
  templateUrl: 'app/templates/pokemon.html'
})
export class PokemonComponent {
    @Input() name: string;
    @Input() imageUrl: string;
}
