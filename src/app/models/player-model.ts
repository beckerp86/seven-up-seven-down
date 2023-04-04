export class Player {
  get name(): string {
    return this._name;
  }

  get id(): string {
    return this._id;
  }

  private _id: string;
  private _name: string;

  constructor(name: string = '') {
    this._id = crypto.randomUUID();
    this._name = name;
  }

  updatePlayerName(newName: string): void {
    this._name = newName;
  }
}
