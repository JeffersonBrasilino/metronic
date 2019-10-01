import {ChangeDetectorRef, Component, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import {Event, NavigationEnd, NavigationStart, Router} from "@angular/router";
import {LoadingBarService} from "@ngx-loading-bar/core";
import {LoadingContentIndicatorService} from "../../shared/components/loading-content-indicator/loading-content-indicator.service";

@Component({
	selector: 'app-base',
	templateUrl: './base.component.html',
	styleUrls: ['./base.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class BaseComponent implements OnInit {

	constructor(private _router: Router, private _rd: ChangeDetectorRef, private _loadingBar: LoadingBarService) {
		this._router.events.subscribe((event: Event) => {
			if (event instanceof NavigationStart) {
				/*this.ms.open({type:'loading'});*/
				this._loadingBar.start();
			}
			if (event instanceof NavigationEnd) {
				this._loadingBar.complete();
			}
			this._rd.markForCheck();
		});
	}

	ngOnInit() {
	}
}

