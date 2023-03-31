import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  IconDefinition,
  faChartLine as fasChartLine,
  faCheck as fasCheck,
  faFloppyDisk as fasFloppyDisk,
  faGear as fasGear,
  faMoon as fasMoon,
  faRepeat as fasRepeat,
  faStar as fasStar,
  faSun as fasSun,
  faXmark as fasXmark,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFloppyDisk as farFloppyDisk,
  faMoon as farMoon,
  faStar as farStar,
  faSun as farSun,
} from '@fortawesome/free-regular-svg-icons';

const solidIcons: IconDefinition[] = [
  fasChartLine,
  fasCheck,
  fasFloppyDisk,
  fasGear,
  fasMoon,
  fasRepeat,
  fasStar,
  fasSun,
  fasXmark,
];

const regularIcons: IconDefinition[] = [
  farFloppyDisk,
  farMoon,
  farStar,
  farSun,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, FontAwesomeModule],
})
export class FortAwesomeModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(...solidIcons, ...regularIcons);
  }
}
