import { Component, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { Trainer } from '../models/trainer';
import { Move } from '../models/move';
import { Item } from '../models/item';
import { PokemonLoader } from '../services/pokemon-loader';
import { TrainerLoader } from '../services/trainer-loader';
import { PokemonComponent } from './pokemon';

var MoveTypes: any;

@Component({
      selector: 'single-battle',
      templateUrl: 'app/templates/single-battle.html',
      providers: [PokemonLoader, TrainerLoader],
      directives: [PokemonComponent]
})
export class SingleBattleComponent implements OnInit {
    @Input() isTrainerBattle: boolean;
    @Input() yourMonId: number;
    @Input() enemyMonId: number;
    @Input() enemyTrainerId: number;
    @Input() yourTrainerId: number;
    @Input() battlefield: any;

    @Output() message: any;

    private yourMon: Pokemon;
    private enemyMon: Pokemon;
    private you: Trainer;
    private enemy: Trainer;
    private currentMove: Move;

    private switches: any = {
      showButtons: true,
      showPokemonOptions: false,
      showBag: false,
      showMoves: false,
      showMoveInformation: false
    };

    constructor(
      private pokemonLoader: PokemonLoader,
      private trainerLoader: TrainerLoader
    ) { }

    ngOnInit() {
      this.yourMon = this.loadPokemon(this.yourMonId);
      this.enemyMon = this.loadPokemon(this.enemyMonId);
      this.you = this.loadTrainer(this.yourTrainerId);
      this.enemy = this.loadTrainer(this.enemyTrainerId);
    }

    private loadPokemon(pokemonId: number): Pokemon {
      return this.pokemonLoader.loadByPokemonId(pokemonId);
    }

    private loadTrainer(trainerId: number): Pokemon {
      return this.trainerLoader.loadByTrainerId(trainerId);
    }

    private attackButtonClicked() {
      for (var key in this.switches) {
        this.switches[key] = false;
      }

      this.switches.showPokemon = true;
    }

    private bagButtonClicked() {
      for (var key in this.switches) {
        this.switches[key] = false;
      }

      this.switches.showBag = true;
    }

    private pokemonButtonClicked() {
      for (var key in this.switches) {
        this.switches[key] = false;
      }

      this.switches.showPokemonOptions = true;
    }

    private runButtonClicked() {
      if (this.isTrainerBattle) {
        this.message = {
          message: "You can't run from a trainer battle!",
          escaped: false,
          yourTurn: true
        };
      } else {
        // TODO - calculate
        this.message = {
          message: "You escaped successfully!",
          escaped: true
        }
      }
    }

    private useMove(move: Move | any, target: Pokemon, user: Pokemon) {
      for (var effect in move.effects) {
        var odds = calculateOdds(effect, ,user, target, this.battlefield);
        
        if (effect.targetsUser) {
          effect.applyTo(user);
          var odds = calculateOdds(effect, user, target,)
        }
        if (effect.targetsUser) {

        }
      }
      var hit_odds: number = calculateHitOdds(move, user, target, this.battlefield);
      var status_odds: number = calculateStatusOdds(move, user, target, this.battlefield);
      var hits: number = Math.random();
      var status: number = Math.random();
      if (hits <= hit_odds) {
        if (move.type === MoveTypes.Status) {
          this.enemyMon.status = move.status_result;
        } else if (move.type === MoveTypes.Healing) {
          if (status <= status_odds) {
            this.yourMon.status = move.status;
          }
          this.yourMon.currentHp += calculateAmountHealed(move, this.yourMon, this.enemyMon, this.battlefield);
          this.yourMon.currentHp = Math.min(this.yourMon.maxHp, this.yourMon.currentHp);
        } else if (move.type === MoveTypes.Damaging) {
          this.enemyMon.currentHp -= calculateAmountDamaged(move, this.yourMon, this.enemyMon, this.battlefield);
          this.enemyMon.currentHp = Math.max(0, this.enemyMon.currentHp);
        } else if (move.type === MoveTypes.Recoil) {
          var result = calculateRecoilMoveDamage(move, this.yourMon, this.enemyMon, this.battlefield);
          this.enemyMon.currentHp -= result.damage;
          this.enemyMon.currentHp = Math.max(0, this.enemyMon.currentHp);
          this.yourMon.currentHp -= result.recoil;
          this.enemyMon.currentHp = Math.max(0, this.yourMon.currentHp);
        }
      }
    }

    private showMoveInformation(move: Move) {
      this.switches.showMoveInformation = true;
    }

    private switchPokemon(pokemon: Pokemon) {
      this.yourMon = pokemon;
    }

    private useItem(item: Item) {
      var effects = item.apply(this.yourMon, this.enemyMon, this.battlefield);
      // TODO: do something with the effects
    }
}
