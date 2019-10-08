import {
	ChangeDetectorRef,
	Component, OnDestroy,
	OnInit,
	ViewChild
} from '@angular/core';
import {MatSort} from "@angular/material";
import {LoadingContentIndicatorService} from "../../../shared/components/loading-content-indicator/loading-content-indicator.service";
import {UsersService} from "../users.service";
import {LayoutService} from "../../../layout/layout.service";

@Component({
	selector: 'list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit,OnDestroy {
	page = 1;
	dataSource;
	@ViewChild(MatSort, {static: true}) sort: MatSort;
	displayedColumns = ['id', 'userId', 'title', 'body'];

	constructor(
		private _loadingContentIndicator: LoadingContentIndicatorService,
		private _service: UsersService,
		private _dr: ChangeDetectorRef,
		private _layoutService: LayoutService
	) {
		this._layoutService.config = {
			subHeader: {
				title: 'Usuario',
				linkAddButton: '/user/form'
			}
		}
	}

	ngOnInit() {
		this.getDataList(1);
	}

	getDataList(pageNum) {
		this._loadingContentIndicator.show();
		this._service.getPosts(pageNum)
			.subscribe(dt => {
				this.dataSource = dt.data;
				this._dr.markForCheck();
				setTimeout(() => {
					this._loadingContentIndicator.hide();
				}, 300);
			});
	}

	ngOnDestroy(): void {

	}
}
