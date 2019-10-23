import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgSelectModule} from '@ng-select/ng-select';
import {MatFormFieldModule, MatIconModule, MatInputModule, MatSortModule, MatTableModule} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ListComponent} from './list/list.component';
import {FormComponent} from './form/form.component';
import {GrupoUsuariosRoutingModule} from './grupo-usuarios-routing.module';
import {GrupoUsuariosService} from './grupo-usuarios.service';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
	declarations: [ListComponent, FormComponent],
	imports: [
		CommonModule,
		GrupoUsuariosRoutingModule,
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
	providers: [GrupoUsuariosService]
})
export class GrupoUsuariosModule {
}
