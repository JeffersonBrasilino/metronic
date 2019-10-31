import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.scss'],
	encapsulation:ViewEncapsulation.None,
	animations: [
		trigger('showPage', [
			transition(':enter', [
				style({visibility: 'hidden', opacity: 0}),
				animate('0.5s linear',style({visibility: 'visible', opacity: 1}))
			])
		]),
		trigger('routerTransition', [
			transition('* <=> *', [
				style({visibility: 'hidden',opacity: 0}),
				animate('0.3s linear',style({visibility: 'visible',opacity: 1}))
			])
		])
	]
})
export class AuthComponent implements OnInit {
	show = false;

	constructor() { }

	ngOnInit() {
		this.show = true;
	}

	prepareRoute(route){
		return route.activatedRoute.url.value[0].path;
	}

}
