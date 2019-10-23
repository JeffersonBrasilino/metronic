import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from '../../core/guard/auth.guard';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/gerencial/usuario/list', //TODO: mudar depois, colocar redirecionamento para index.
		pathMatch: 'full'
	},
	{
		path: "usuario",
		canActivateChild: [AuthGuard],
		loadChildren: () =>
			import("./users/users.module").then(mod => mod.UsersModule),
	},
	{
		path: "grupoUsuarios",
		loadChildren: () =>
			import("./grupo-usuarios/grupo-usuarios.module").then(mod => mod.GrupoUsuariosModule)
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class GerencialRoutingModule {
}
