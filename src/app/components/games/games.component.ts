import { FreeGamesService } from './../../services/free-games.service';
import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
  id!: number;
  juegos!: Array<Game>;
  nJuego!: Game;

  constructor(private gameService: FreeGamesService) {
    this.juegos = new Array<Game>();
  }

  ngOnInit(): void {}

  getGame(id: number) {
    this.nJuego = new Game();
    this.gameService.getGame(id).subscribe((res) => {
      this.nJuego.title = res.title;
      this.nJuego.img = res.screenshots[2].image;
      Object.assign(this.nJuego.requirement, res.minimum_system_requirements);
      this.juegos.push(this.nJuego);
      console.log(this.juegos);
      // this.nJuego.requirement.os = res.minimum_system_requirements.os;
    });
  }
}
