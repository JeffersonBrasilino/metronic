import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from "./list/list.component";
import {FormComponent} from "./form/form.component";

const routes: Routes = [
	{
		path: '',
		redirectTo: '/gerencial/usuario/list',
		pathMatch: 'full'
	},
	{
		path: 'list',
		component: ListComponent,
		data:{animation: 'list'}
	},
	{
		path: 'form',
		component: FormComponent,
		data:{animation: 'form'}
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class UsersRoutingModule {
}
