import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FortAwesomeModule } from './fort-awesome.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';

const sharedModules = [
  BrowserModule,
  BrowserAnimationsModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
  FortAwesomeModule,
];

@NgModule({
  declarations: [],
  imports: sharedModules,
  exports: sharedModules,
  providers: [],
})
export class SharedModule {}
