import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {ListComponent} from './list/list.component';
import {FormComponent} from './form/form.component';
import {NgSelectModule} from "@ng-select/ng-select";
import {MatSortModule, MatTableModule} from "@angular/material";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {SubheaderComponent} from "../../layout/subheader/subheader.component";


@NgModule({
	declarations: [SubheaderComponent, ListComponent, FormComponent],
	imports: [
		CommonModule,
		UsersRoutingModule,
		NgSelectModule,
		/*datatable*/
		MatTableModule,
		MatSortModule,
		NgbModule
	],
	exports: [NgSelectModule]
})
export class UsersModule {
}
