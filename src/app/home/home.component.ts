import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  pokemonList: { name: string, url: string }[] = [];
  nextLink: string = '';
  prevLink: string = '';
  

  constructor(public httpClient: HttpClient) {
    httpClient.get<any>('https://pokeapi.co/api/v2/pokemon')
      .subscribe(response => {
        this.pokemonList = response.results;
        this.nextLink = response.next;
        this.prevLink = response.previous;
      });
  }

  loadNext(): void {
    if (this.nextLink) {
      this.httpClient.get<any>(this.nextLink)
        .subscribe(response => {
          this.pokemonList = response.results;
          this.nextLink = response.next;
          this.prevLink = response.previous;
        });
    }
  }

  loadPrevious(): void {
    if (this.prevLink) {
      this.httpClient.get<any>(this.prevLink)
        .subscribe(response => {
          this.pokemonList = response.results;
          this.nextLink = response.next;
          this.prevLink = response.previous;
        });
    }
  }
}
