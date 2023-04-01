import { Injectable } from '@angular/core';
import { Game } from '../models/game-model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  currentGame?: Game;

  constructor() { }

  openNewGameSettingsScreen(): void {}
}
