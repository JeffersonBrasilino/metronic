import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModalComponent} from "./modal.component";
import {FormsModule} from "@angular/forms";
import {ModalModule as ngxModal}  from "ngx-bootstrap";
import {MatProgressSpinnerModule} from "@angular/material";
import { ModalDirective } from './modal.directive';



@NgModule({
  declarations: [ModalComponent, ModalDirective],
  imports: [
    CommonModule,
	  ngxModal.forRoot(),
	  FormsModule,
	  MatProgressSpinnerModule
  ],
	exports:[ModalComponent],
	entryComponents:[
		ModalComponent
	]
})
export class ModalModule { }
