import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  GameDirection,
  GameSettings,
} from 'src/app/models/game-settings.model';
import { Player } from 'src/app/models/player-model';

@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.scss'],
})
export class GameSettingsComponent {
  defaultGameSettings!: GameSettings;

  get players(): FormArray {
    return this.playersForm.controls['players'] as FormArray;
  }

  get isSaveButtonEnabled(): boolean {
    return this.isSettingsFormValid() && this.isPlayersFormValid();
  }

  get isAddPlayerButtonShown(): boolean {
    return this.players.length < this.maxPlayers;
  }

  get bidBonus(): number {
    return this.settingsForm.controls['bidBonus'].value;
  }

  settingsForm: FormGroup;
  playersForm: FormGroup;

  private maxPlayers = 7;

  constructor(private fb: FormBuilder) {
    this.defaultGameSettings = this.getDefaultGameSettings();

    this.settingsForm = this.fb.group({
      gameDirection: [
        this.defaultGameSettings.gameDirection,
        Validators.required,
      ],
      bidBonus: [this.defaultGameSettings.bidBonus, Validators.required],
      surpriseEndingMode: this.defaultGameSettings.surpriseEndingMode,
    });

    this.playersForm = this.fb.group({
      players: this.fb.array(this.getDefaultPlayers()),
    });
  }

  addPlayer(): void {
    const newPlayer = this.fb.group({ players: new Player('') });
    this.players.push(newPlayer);
  }

  deletePlayer(index: number): void {
    this.players.removeAt(index);
  }

  private isSettingsFormValid(): boolean {
    return this.settingsForm.valid;
  }

  private isPlayersFormValid(): boolean {
    return this.playersForm.valid;
  }

  save(): void {
    if (!this.isSaveButtonEnabled) return;
    // TODO:
  }

  private getDefaultPlayers(): Player[] {
    return [
      new Player('Jeff'),
      new Player('Lynnette'),
      new Player('Paul'),
      new Player('Heather'),
    ];
  }

  private getDefaultGameSettings(): GameSettings {
    return new GameSettings(GameDirection.UpFirst, 10, false);
  }
}
