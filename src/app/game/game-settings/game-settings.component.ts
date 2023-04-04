import { AbstractControl } from '@angular/forms';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  GameDirection,
  GameSettings,
} from 'src/app/models/game-settings.model';
import { Player } from 'src/app/models/player-model';
import { take } from 'rxjs';

@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.scss'],
})
export class GameSettingsComponent implements OnInit {
  @Input() settings?: GameSettings = undefined;
  @Output() saveSettingsEvent = new EventEmitter<GameSettings>();

  @ViewChildren('nameInputs') nameInputs?: QueryList<ElementRef>;

  get players(): FormArray {
    return this.form.controls['players'] as FormArray;
  }

  get isSaveButtonEnabled(): boolean {
    return this.form.valid && this.players.length > this.minPlayers;
  }

  get isAddPlayerButtonShown(): boolean {
    return this.players.length < this.maxPlayers;
  }

  form: FormGroup;

  private minPlayers = 2;
  private maxPlayers = 7;

  constructor(private fb: FormBuilder) {
    this.settings = this.settings || this.getDefaultGameSettings();

    this.form = this.fb.group({
      gameDirection: [this.settings.gameDirection, Validators.required],
      bidBonus: [this.settings.bidBonus, Validators.required],
      surpriseEndingMode: [
        this.settings.surpriseEndingMode ? 1 : 0,
        Validators.required,
      ],
      players: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.settings!.players.forEach((x) => this.addPlayer(x));
  }

  addPlayer(player: Player | undefined = undefined): void {
    if (this.players.length >= this.maxPlayers) return;

    // Auto-focus last name on the list
    this.nameInputs?.changes.pipe(take(1)).subscribe({
      next: (changes) => changes.last.nativeElement.focus(),
    });

    const newPlayer = this.fb.group({
      player: [player?.name || '', Validators.required],
    });
    this.players.push(newPlayer);
  }

  deletePlayer(index: number): void {
    this.players.removeAt(index);
  }

  save(): void {
    if (!this.isSaveButtonEnabled) return;
    const settings = this.mapFormToModel();
    this.saveSettingsEvent.emit(settings);
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
    return new GameSettings(
      GameDirection.UpFirst,
      10,
      false,
      this.getDefaultPlayers(),
    );
  }

  private mapFormToModel(): GameSettings {
    const direction = this.form.controls['gameDirection'].value;
    const bidBonus = this.form.controls['bidBonus'].value || 0;
    const surpriseEnding = this.form.controls['surpriseEndingMode'].value == 1;
    const players = this.players.controls.map(
      (form: AbstractControl) => new Player(form.value),
    );
    return new GameSettings(direction, bidBonus, surpriseEnding, players);
  }
}
