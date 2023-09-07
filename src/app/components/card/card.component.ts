import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  name: string = 'salamence'.toLocaleUpperCase();
  atributesTypes: string[] = ['FIRE', 'WATER'];
  constructor(private service: PokemonService) {}

  ngOnInit(): void {
    this.service.getPokemon('pikachu');
  }
}
