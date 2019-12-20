import { SignupComponent } from './signup/signup.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SigninComponent } from "./signin/signin.component";
import {ActivateUserComponent} from "./activate-user/activate-user.component";

const routes: Routes = [
	{
		path: "signin",
		component: SigninComponent,
	},
	{
		path: "signup",
		component: SignupComponent
	},
	{
		path: "activateUser/:userId",
		component: ActivateUserComponent
	},
	{path:'', redirectTo:'/auth/signin',pathMatch:'full'}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AuthRoutingModule {}
