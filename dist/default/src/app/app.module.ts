
// Angular
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Copmponents
import {AppComponent} from './app.component';

import {AppRoutingModule} from './app-routing.module';

import {LayoutModule} from "./layout/layout.module";

import {AuthModule} from "./pages/auth/auth.module";
import {LoadingBarModule} from "@ngx-loading-bar/core";
import {SharedModule} from "./shared/shared.module";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserAnimationsModule,
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		LayoutModule,
		AuthModule,
		LoadingBarModule,
		SharedModule
	],
	exports: [],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
