import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseComponent} from './base/base.component';
import {MenuComponent} from "./aside/menu/menu.component";
import {AsideComponent} from './aside/aside/aside.component';
import {BrandComponent} from './aside/brand/brand.component';

import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {InlineSVGModule} from "ng-inline-svg";
import {HeaderMobileComponent} from './header-mobile/header-mobile.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {NavigationRoutingModule} from "./navigation-routing.module";
import {NotFoundPageComponent} from "../pages/not-found-page/not-found-page.component";
import {LayoutPartialsModule} from "./layout-partials/layout-partials.module";
import {SharedModule} from "../shared/shared.module";
import {LoadingBarModule} from "@ngx-loading-bar/core";
import {LoadingContentIndicatorModule} from "../shared/components/loading-content-indicator/loading-content-indicator.module";
import {SubheaderComponent} from "./subheader/subheader.component";
import {LayoutService} from "./layout.service";

@NgModule({
	declarations: [
		BaseComponent,
		MenuComponent,
		AsideComponent,
		BrandComponent,
		HeaderMobileComponent,
		HeaderComponent,
		FooterComponent,
		NotFoundPageComponent,
		SubheaderComponent
	],
	imports: [
		CommonModule,
		LayoutPartialsModule,
		PerfectScrollbarModule,
		InlineSVGModule,
		NavigationRoutingModule,
		SharedModule,
		LoadingBarModule,
		LoadingContentIndicatorModule
	],
	providers:[LayoutService],
	exports: []
})
export class LayoutModule {
}
