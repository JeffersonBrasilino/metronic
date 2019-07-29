
// Angular
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Copmponents
import {AppComponent} from './app.component';

import {AppRoutingModule} from './app-routing.module';

import {LayoutModule} from "./layout/layout.module";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserAnimationsModule,
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		LayoutModule,
	],
	exports: [],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}