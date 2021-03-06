import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {AuthComponent} from "./auth.component";
import {MatProgressSpinnerModule} from '@angular/material';
import {AuthRoutingModule} from './auth-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import {ModalModule} from "../../shared/components/modal/modal.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {MatDialogModule} from "@angular/material/dialog";
import {RecaptchaModule} from "ng-recaptcha";
import {EmailTemplateService} from "../../shared/services/email-template/email-template.service";
import { ActivateUserComponent } from './activate-user/activate-user.component';

@NgModule({
	declarations: [SigninComponent, SignupComponent,AuthComponent, ActivateUserComponent],
	imports: [
		CommonModule,
		AuthRoutingModule,
		MatProgressSpinnerModule,
		ModalModule,
		/*form*/
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		ReactiveFormsModule,
		NgbModule,
		MatDialogModule,
		RecaptchaModule
	],
	providers:[
		EmailTemplateService
	]
})
export class AuthModule {
}
