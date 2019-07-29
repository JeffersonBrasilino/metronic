// Anglar
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Layout Directives
import { ContentAnimateDirective, HeaderDirective, MenuDirective, StickyDirective } from './index';
// Pipes
// Services
import { OffcanvasDirective, ScrollTopDirective, TabClickEventDirective, ToggleDirective } from './index';

@NgModule({
	imports: [CommonModule],
	declarations: [
		// directives
		ScrollTopDirective,
		HeaderDirective,
		OffcanvasDirective,
		ToggleDirective,
		MenuDirective,
		TabClickEventDirective,
		ContentAnimateDirective,
		StickyDirective,
	],
	exports: [
		// directives
		ScrollTopDirective,
		HeaderDirective,
		OffcanvasDirective,
		ToggleDirective,
		MenuDirective,
		TabClickEventDirective,
		ContentAnimateDirective,
		StickyDirective,
	],
	providers: []
})
export class LayoutPartialsModule {
}
