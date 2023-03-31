import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from './core/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [SharedModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [SharedModule],
})
export class AppModule {}
