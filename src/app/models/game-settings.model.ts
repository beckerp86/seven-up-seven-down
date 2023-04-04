import { Player } from './player-model';

export class GameSettings {
  private _gameDirection: GameDirection;
  get gameDirection(): GameDirection {
    return this._gameDirection;
  }

  private _bidBonus: number;
  get bidBonus(): number {
    return this._bidBonus;
  }

  private _surpriseEndingMode: boolean;
  get surpriseEndingMode(): boolean {
    return this._surpriseEndingMode;
  }

  private _players: Player[];
  get players(): Player[] {
    return this._players;
  }

  constructor(
    direction: GameDirection,
    bidBonus: number,
    surpriseEndingMode: boolean,
    players: Player[],
  ) {
    this._gameDirection = direction;
    this._bidBonus = bidBonus;
    this._surpriseEndingMode = surpriseEndingMode;
    this._players = players;
  }
}

export enum GameDirection {
  UpFirst = 1,
  DownFirst,
}
