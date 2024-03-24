import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Pokemon {
  name: string;
  url: string;
}

interface PokemonListResponse {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  pokemonList: Pokemon[] = [];
  nextLink: string = '';
  prevLink: string = '';

  constructor(private httpClient: HttpClient) {
    httpClient.get<PokemonListResponse>('https://pokeapi.co/api/v2/pokemon')
      .subscribe(response => {
        this.pokemonList = response.results;
        this.nextLink = response.next;
        this.prevLink = response.previous;
      });
  }

  loadNext(): void {
    if (this.nextLink) {
      this.httpClient.get<PokemonListResponse>(this.nextLink)
        .subscribe(response => {
          this.pokemonList = response.results;
          this.nextLink = response.next;
          this.prevLink = response.previous;
        });
    }
  }

  loadPrevious(): void {
    if (this.prevLink) {
      this.httpClient.get<PokemonListResponse>(this.prevLink)
        .subscribe(response => {
          this.pokemonList = response.results;
          this.nextLink = response.next;
          this.prevLink = response.previous;
        });
    }
  }

}