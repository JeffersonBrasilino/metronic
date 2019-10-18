import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {ListComponent} from './list/list.component';
import {FormComponent} from './form/form.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {MatFormFieldModule, MatIconModule, MatInputModule, MatSortModule, MatTableModule} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UsersService} from './users.service';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
	declarations: [ListComponent, FormComponent],
	imports: [
		CommonModule,
		UsersRoutingModule,
		NgSelectModule,
		/*datatable*/
		MatTableModule,
		MatSortModule,
		/*form*/
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		ReactiveFormsModule,
		NgbModule,
	],
	exports: [NgSelectModule],
	providers: [UsersService]
})
export class UsersModule {
}
