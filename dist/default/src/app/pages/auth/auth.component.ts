import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.scss'],
	animations: [
		trigger('showPage', [
			transition('* <=> *', [
				style({visibility: 'hidden',opacity: 0}),
				animate('0.3s linear',style({visibility: 'visible',opacity: 1}))
			])
		])
	]
})
export class AuthComponent implements OnInit {
	show = false

	constructor() { }

	ngOnInit() {
		this.show = true;
	}

}
