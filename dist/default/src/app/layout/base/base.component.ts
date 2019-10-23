import {ChangeDetectorRef, Component, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import {Event, NavigationEnd, NavigationStart, Router, RouterOutlet} from "@angular/router";
import {LoadingBarService} from "@ngx-loading-bar/core";
import {animate, group, query, style, transition, trigger} from "@angular/animations";

@Component({
	selector: 'app-base',
	templateUrl: './base.component.html',
	styleUrls: ['./base.component.scss'],
	encapsulation: ViewEncapsulation.None,
	animations: [
		trigger('routerTransition', [
			transition('* <=> *', [
				style({visibility: 'hidden',opacity: 0}),
				animate('0.5s linear',style({visibility: 'visible',opacity: 1}))
			])
		])
	]
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

	prepareRoute(outlet: RouterOutlet) {
		return outlet.activatedRouteData.animation;
	}
}

