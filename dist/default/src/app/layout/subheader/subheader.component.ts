import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'app-subheader',
	templateUrl: './subheader.component.html',
	styleUrls: ['./subheader.component.scss']
})
export class SubheaderComponent implements OnInit {

	@Input() title: string = 'Component';
	@Input() linkAddButton;
	@Input() linkReturnButton;

	constructor() {
	}

	ngOnInit() {
	}

}
