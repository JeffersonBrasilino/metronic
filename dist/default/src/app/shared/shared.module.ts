import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalComponent} from './components/modal/modal.component';
import {ModalModule} from "ngx-bootstrap";
import {FormsModule} from "@angular/forms";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'

@NgModule({
	declarations: [ModalComponent],
	imports: [
		CommonModule,
		ModalModule.forRoot(),
		FormsModule,
		MatProgressSpinnerModule
	],
	exports:[ModalComponent]
})
export class SharedModule {
}
