import {AfterViewInit, Component, EventEmitter, OnChanges, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from "@angular/material";
import {ModalService} from "../../../shared/components/modal/modal.service";

@Component({
	selector: 'list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
	page = 1;
	@ViewChild(MatSort,{static: true}) sort: MatSort;
	dataSource: MatTableDataSource<any>;
	displayedColumns = ['position', 'name', 'weight', 'symbol'];
	data = [
		{position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
		{position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
		{position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
		{position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
		{position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
		{position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
		{position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
		{position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
	];
	constructor(private modal: ModalService, private _render:Renderer2) {
		this.dataSource = new MatTableDataSource(this.data);
	}

	ngOnInit() {
		this.dataSource.sort = this.sort;
	}
	hue(pageNum){
		this.modal.open({type:"default",modalOptions:{backdrop:'static'}});
	}
}
