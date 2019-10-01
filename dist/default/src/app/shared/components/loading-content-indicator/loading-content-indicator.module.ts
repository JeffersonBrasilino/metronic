import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoadingContentIndicatorComponent} from "./loading-content-indicator.component";
import {MatProgressSpinnerModule} from "@angular/material";



@NgModule({
  declarations: [LoadingContentIndicatorComponent],
  imports: [
    CommonModule,
	  MatProgressSpinnerModule
  ],
	exports:[LoadingContentIndicatorComponent]
})
export class LoadingContentIndicatorModule { }
