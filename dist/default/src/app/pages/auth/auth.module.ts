import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {AuthComponent} from "./auth.component";
import {MatProgressSpinnerModule} from '@angular/material';
import {AuthRoutingModule} from './auth-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ModalModule} from "../../shared/components/modal/modal.module";

@NgModule({
	declarations: [SigninComponent, SignupComponent,AuthComponent],
	imports: [
		CommonModule,
		AuthRoutingModule,
		MatProgressSpinnerModule,
		FormsModule,
		ReactiveFormsModule,
		ModalModule
	]
})
export class AuthModule {
}
