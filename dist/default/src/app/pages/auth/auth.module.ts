import {SigninComponent} from './signin/signin.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {SignupComponent} from './signup/signup.component';
import {MatProgressSpinnerModule} from '@angular/material';
import {AuthComponent} from "./auth.component";
import {SharedModule} from "../../shared/shared.module";
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
