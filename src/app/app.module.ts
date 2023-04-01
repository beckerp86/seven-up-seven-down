import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from './core/shared.module';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { MenuComponent } from './layout/menu/menu.component';
import { GameSettingsComponent } from './game/game-settings/game-settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, ToolbarComponent, MenuComponent, GameSettingsComponent],
  imports: [SharedModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [SharedModule],
})
export class AppModule {}
