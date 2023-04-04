import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { BidsForRound } from 'src/app/models/game-round-model';
import { Player } from 'src/app/models/player-model';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.scss'],
})
export class BidsComponent {
  @Input() bids?: BidsForRound[]; // only present in edit mode
  @Input() cardsDealt!: number;
  @Input() players!: Player[];
  @Input() roundNum!: number;

  @Output() saveBidsEvent = new EventEmitter<BidsForRound[]>();

  get isEditMode(): boolean {
    return Utils.IsArrayAndHasValues(this.bids);
  }

  get formBids(): FormArray {
    return this.form.controls['bids'] as FormArray;
  }

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    const initialValues: BidsForRound[] = this.isEditMode ? this.bids! : [];
    this.form = this.fb.group({ bids: this.fb.array(initialValues) });
  }

  saveBids(): void {
    if (!this.form.invalid) return;
  }

  private mapModelToForm(): void {
    // TODO:
  }

  private mapFormToModel(): BidsForRound[] {
    const bids = this.formBids.controls.map(
      // TODO:
      (form: AbstractControl) => new BidsForRound(0, 0),
    );
    return bids;
  }
}
