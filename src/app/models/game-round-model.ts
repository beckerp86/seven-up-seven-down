export class GameRound {
  id: string;
  roundNum: number; // 1 to 14
  cardsDealt: number; // 1 to 7 always
  bids: PlayerBidForRound[] = [];
  tricks: TricksTakenInRound[] = [];

  constructor(roundNum: number, cardsDealt: number) {
    this.id = crypto.randomUUID();
    this.roundNum = roundNum;
    this.cardsDealt = cardsDealt;
  }

  addBids(bids: PlayerBidForRound[]): void {
    this.bids = bids;
  }

  addTricks(tricks: TricksTakenInRound[]): void {
    this.tricks = tricks;
  }
}

export class PlayerBidForRound {
  id: string;
  playerId: number;
  roundId: number;
  bidCount: number;

  constructor(playerId: number, roundId: number, bidCount: number) {
    this.id = crypto.randomUUID();
    this.playerId = playerId;
    this.roundId = roundId;
    this.bidCount = bidCount;
  }
}

export class TricksTakenInRound {
  id: string;
  playerId: number;
  roundId: number;
  tricksTaken: number;

  constructor(playerId: number, roundId: number, tricksTaken: number) {
    this.id = crypto.randomUUID();
    this.playerId = playerId;
    this.roundId = roundId;
    this.tricksTaken = tricksTaken;
  }
}
