import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
	selector: 'list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
	@Output() teste = new EventEmitter<String>();

	simpleItems = [];

	constructor() {
	}

	ngOnInit() {
		this.simpleItems = [true, 'Two', 3];
	}

}
