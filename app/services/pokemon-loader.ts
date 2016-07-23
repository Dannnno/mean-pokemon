import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ConnectionStrings } from '../config/connection-strings';
import { Pokemon } from '../models/pokemon';

@Injectable()
export class PokemonLoader {

  constructor(
    private connectionString: string = ConnectionStrings.localDev,
    private http: Http) { }

  loadByPokemonId(pokemonId: number, generationId: number = 1): any {
    return this.http.get(this.getIdRoute(pokemonId, generationId));
  }

  loadByPokemonName(pokemonName: string, generationId: number = 1): any {
    return this.http.get(this.getNameRoute(pokemonName, generationId));
  }

  private getIdRoute(id: number, generation: number): string {
    return `#/api/pokemon/${generation}/${id}`;
  }

  private getNameRoute(name: string, generation: number): string {
    return `#/api/pokemon/${generation}/${name}`;
  }
}
