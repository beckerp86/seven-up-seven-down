import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BidsComponent } from './game/bids/bids.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog/confirm-dialog.component';
import { GameSettingsComponent } from './game/game-settings/game-settings.component';
import { MenuComponent } from './layout/menu/menu.component';
import { NgModule } from '@angular/core';
import { SharedModule } from './core/shared.module';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BidsComponent,
    ConfirmDialogComponent,
    GameSettingsComponent,
    MenuComponent,
    ToolbarComponent,
  ],
  imports: [SharedModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [SharedModule],
  entryComponents: [ConfirmDialogComponent],
})
export class AppModule {}
