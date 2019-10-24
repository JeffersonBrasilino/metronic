import {Subscription} from 'rxjs';
// Angular
import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	OnDestroy,
	OnInit, ViewChild
} from '@angular/core';
import {Event, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {LoadingBarService} from "@ngx-loading-bar/core";
import {ModalService} from "./shared/components/modal/modal.service";
import {SplashScreenComponent} from "./layout/splash-screen/splash-screen.component";

@Component({
	selector: 'body[kt-root]',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
	// Public properties
	title = 'Petinder';
	@ViewChild(SplashScreenComponent, {static: false}) splashScreen: SplashScreenComponent;
	private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

	/**
	 * Component constructor
	 *
	 * @param translationService: TranslationService
	 * @param router: Router
	 * @param layoutConfigService: LayoutCongifService
	 * @param splashScreenService: SplashScreenService
	 */
	constructor(private _router: Router, private _rd: ChangeDetectorRef, private _loadingBar: LoadingBarService, private ms: ModalService) {
		this._router.events.subscribe((event: Event) => {
			if (event instanceof NavigationStart) {
				/*this.ms.open({type:'loading'});*/
				/*this._loadingBar.start();*/
			}
			if (event instanceof NavigationEnd) {
				this.splashScreen.hide();
				this.ms.close();
			}
			this._rd.markForCheck();
		});
	}

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit(): void {

	}

	/**
	 * On Destroy
	 */
	ngOnDestroy() {
		this.unsubscribe.forEach(sb => sb.unsubscribe());
	}
}
