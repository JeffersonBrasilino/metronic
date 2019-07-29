import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MenuOptions, OffcanvasOptions} from "../../layout-partials/index";

@Component({
	selector: 'app-aside',
	templateUrl: './aside.component.html',
	styleUrls: ['./aside.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsideComponent implements OnInit,AfterViewInit {

	constructor() {}

	menuCanvasOptions: OffcanvasOptions = {
		baseClass: 'kt-aside',
		overlay: true,
		closeBy: 'kt_aside_close_btn',
		toggleBy: {
			target: 'kt_aside_mobile_toggler',
			state: 'kt-header-mobile__toolbar-toggler--active'
		}
	};

	ngOnInit() {
	}

	ngAfterViewInit(){}

}
