// Angular
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Copmponents
import {AppComponent} from './app.component';

import {AppRoutingModule} from './app-routing.module';

import {LayoutModule} from "./layout/layout.module";

import {AuthModule} from "./pages/auth/auth.module";
import {RECAPTCHA_SETTINGS, RecaptchaSettings} from "ng-recaptcha";
import {environment} from "../environments/environment";
import {HttpInterceptorService} from "./core/services/HttpInterceptor.service";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserAnimationsModule,
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		LayoutModule,
		AuthModule
	],
	exports: [],
	providers: [
		{
			provide: RECAPTCHA_SETTINGS,
			useValue: {siteKey: environment.RECAPCHA_KEY} as RecaptchaSettings
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass:HttpInterceptorService,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
