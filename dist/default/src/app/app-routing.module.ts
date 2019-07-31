// Angular
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundPageComponent } from "./pages/not-found-page/not-found-page.component";
import { BaseComponent } from "./layout/base/base.component";
import { AuthComponent } from './pages/auth/auth.component';

const routes: Routes = [
	{
		path: "user",
		component: BaseComponent,
		loadChildren: () =>
			import("./pages/users/users.module").then(mod => mod.UsersModule)
	},
	{
		path: "auth",
		component: AuthComponent,
		loadChildren: () =>
			import("./pages/auth/auth.module").then(m => m.AuthModule)
	},
	{ path: "**", component: NotFoundPageComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }