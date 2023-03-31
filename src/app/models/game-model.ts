import { GameRound } from './game-round-model';
import { GameDirection, GameSettings } from './game-settings.model';
import { Player } from './player-model';

export class Game {
  private _players: Player[];
  get players(): Player[] {
    return this._players;
  }

  settings: GameSettings;
  rounds!: GameRound[];

  private currentRoundIndex: number = 0;
  get currentRound(): GameRound {
    return this.rounds[this.currentRoundIndex];
  }

  constructor(players: Player[], settings: GameSettings) {
    this._players = players;
    this.settings = settings;
    this.generateRounds();
  }

  updatePlayer(player: Player): void {
    this._players[this.getPlayerIndexById(player.id)] = player;
  }

  deletePlayer(player: Player): void {
    this.deletePlayerById(player.id);
  }

  deletePlayerById(playerId: string): void {
    this._players.splice(this.getPlayerIndexById(playerId), 1);
  }

  progressToNextRound(): void {
    this.currentRoundIndex++;
  }

  private getPlayerIndexById(playerId: string): number {
    return this._players.findIndex((x: Player) => x.id === playerId);
  }

  private generateRounds(): void {
    const rounds: GameRound[] = [];

    for (let i = 0; i < 14; i++) {
      const roundNum: number = i + 1;
      const pastMidgame: boolean = roundNum > 7;
      let cardsDealt: number = 0;

      switch (this.settings.gameDirection) {
        case GameDirection.DownFirst: {
          cardsDealt = pastMidgame ? roundNum - 7 : 8 - roundNum;
          break;
        }
        case GameDirection.UpFirst: {
          cardsDealt = pastMidgame ? 7 - (roundNum % 7) : roundNum;
          break;
        }
        default:
          break;
      }
      const newRound = new GameRound(roundNum, cardsDealt);
      rounds.push(newRound);
    }

    this.rounds = rounds;
  }
}
