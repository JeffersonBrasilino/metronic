import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ToggleOptions} from "../../layout-partials/index";

@Component({
  selector: 'brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class BrandComponent implements OnInit,AfterViewInit {

  constructor() { }

	// Public properties
	headerLogo: string;
	headerStickyLogo: string;

	toggleOptions: ToggleOptions = {
		target: 'body',
		targetState: 'kt-aside--minimize',
		togglerState: 'kt-aside__brand-aside-toggler--active'
	};

  ngOnInit() {
  }
  ngAfterViewInit(){}

}
