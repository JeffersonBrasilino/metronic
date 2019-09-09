import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModalComponent} from "./modal.component";
import {FormsModule} from "@angular/forms";
import {ModalModule as ngxModal}  from "ngx-bootstrap";
import {MatProgressSpinnerModule} from "@angular/material";

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
	  ngxModal.forRoot(),
	  FormsModule,
	  MatProgressSpinnerModule
  ],
	entryComponents:[
		ModalComponent
	]
})
export class ModalModule { }
