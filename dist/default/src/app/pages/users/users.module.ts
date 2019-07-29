import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {ListComponent} from './list/list.component';
import {FormComponent} from './form/form.component';
import {NgSelectModule} from "@ng-select/ng-select";

@NgModule({
	declarations: [ListComponent, FormComponent],
	imports: [
		CommonModule,
		UsersRoutingModule,
		NgSelectModule
	],
	exports: [NgSelectModule]
})
export class UsersModule {
}
