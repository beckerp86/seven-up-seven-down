export class GameRound {
  id: string;
  roundNum: number; // 1 to 14
  cardsDealt: number; // 1 to 7 always
  bidBonus: number;
  bids: BidsForRound[] = [];
  tricks: TricksTakenInRound[] = [];
  points: PointsEarnedInRound[] = [];

  constructor(roundNum: number, cardsDealt: number, bidBonus: number) {
    this.id = crypto.randomUUID();
    this.roundNum = roundNum;
    this.cardsDealt = cardsDealt;
    this.bidBonus = bidBonus;
  }

  addBids(bids: BidsForRound[]): void {
    this.bids = bids;
  }

  addTricks(tricks: TricksTakenInRound[]): void {
    this.tricks = tricks;
  }

  calculatePointsEarnedInRound(): void {
    this.bids.forEach((bid: BidsForRound) => {
      const tricks = this.tricks.find(
        (trick: TricksTakenInRound) => trick.playerId === bid.playerId,
      );

      if (!tricks) {
        throw new Error(
          `Cannot resolve tricks for round playerId: ${bid.playerId} in round ${this.roundNum}`,
        );
      }

      this.points.push(
        new PointsEarnedInRound(
          bid.playerId,
          bid.bidCount,
          tricks?.tricksTaken,
          this.bidBonus,
        ),
      );
    });
  }
}

export class BidsForRound {
  id: string;
  playerId: number;
  bidCount: number;

  constructor(playerId: number, bidCount: number) {
    this.id = crypto.randomUUID();
    this.playerId = playerId;
    this.bidCount = bidCount;
  }
}

export class TricksTakenInRound {
  id: string;
  playerId: number;
  tricksTaken: number;

  constructor(playerId: number, tricksTaken: number) {
    this.id = crypto.randomUUID();
    this.playerId = playerId;
    this.tricksTaken = tricksTaken;
  }
}

export class PointsEarnedInRound {
  id: string;
  playerId: number;
  points: number;

  constructor(
    playerId: number,
    bids: number,
    tricks: number,
    bidBonus: number,
  ) {
    this.id = crypto.randomUUID();
    this.playerId = playerId;

    if (bids === tricks) {
      // Score the tricks you took plus the bid bonus
      this.points = tricks + bidBonus;
      return;
    }

    if (bids < tricks) {
      // Score only tricks you took, no bid bonus added
      this.points = tricks;
      return;
    }

    // Score negative points equal to your bid
    this.points = bids * -1;
  }
}
