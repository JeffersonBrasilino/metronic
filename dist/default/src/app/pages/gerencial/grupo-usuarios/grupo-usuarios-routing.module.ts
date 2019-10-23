import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from "./list/list.component";
import {FormComponent} from "./form/form.component";

const routes: Routes = [
	{
		path: '',
		redirectTo: '', //adicionar link de redirect default AQUI.
		pathMatch: 'full'
	},
	{
		path: 'list',
		component: ListComponent
	},
	{
		path: 'form',
		component: FormComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class GrupoUsuariosRoutingModule {
}
