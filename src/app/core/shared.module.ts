import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FortAwesomeModule } from './fort-awesome.module';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';

const sharedModules = [
  BrowserAnimationsModule,
  BrowserModule,
  CommonModule,
  FormsModule,
  FortAwesomeModule,
  MaterialModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [],
  imports: sharedModules,
  exports: sharedModules,
  providers: [],
})
export class SharedModule {}
