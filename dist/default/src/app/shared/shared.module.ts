import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalModule} from "ngx-bootstrap";
import {FormsModule} from "@angular/forms";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		ModalModule.forRoot(),
		FormsModule,
		MatProgressSpinnerModule
	],
	exports:[]
})
export class SharedModule {
}
