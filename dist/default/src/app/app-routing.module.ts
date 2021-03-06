// Angular
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {NotFoundPageComponent} from "./pages/not-found-page/not-found-page.component";
import {BaseComponent} from "./layout/base/base.component";
import {AuthComponent} from './pages/auth/auth.component';
import {AuthGuard} from "./core/guard/auth.guard";
import {MenuResolverService} from "./layout/aside/menu/menu-resolver.service";

const routes: Routes = [
	{
		path: "auth",
		component: AuthComponent,
		loadChildren: () =>
			import("./pages/auth/auth.module").then(m => m.AuthModule)
	},
	{
		path: "",
		component: BaseComponent,
		resolve: {
			menu: MenuResolverService
		},
		children: [
			{
				path: "",
				redirectTo: '/auth/signin',
				pathMatch: 'full'
			},
			{
				path: "gerencial",
				canActivate: [AuthGuard],
				loadChildren: () =>
					import("./pages/gerencial/gerencial.module").then(mod => mod.GerencialModule)
			}
		]
	},
	{path: "**", component: NotFoundPageComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
