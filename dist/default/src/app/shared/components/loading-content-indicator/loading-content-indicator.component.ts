import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {LoadingContentIndicatorService} from "./loading-content-indicator.service";
import {Subscription} from "rxjs";

@Component({
	selector: 'loading-content-indicator',
	templateUrl: './loading-content-indicator.component.html',
	styleUrls: ['./loading-content-indicator.component.scss']
})
export class LoadingContentIndicatorComponent implements OnInit, OnDestroy {

	subscription: Subscription;

	constructor(private _render: Renderer2, private _loadingIndicator: LoadingContentIndicatorService) {
		console.log('construtor do component');
		this.subscription = this._loadingIndicator.loadingIndicatorSource$.subscribe(data=>{
			if(data == 'show')
				this.showModal();
			if(data == 'hide'){
				this.hideModal();
			}
		});
	}

	ngOnInit() {
	}

	showModal() {
		let block = this._render.selectRootElement('.block', true);
		this._render.removeClass(block, 'hidden');
		this._render.addClass(block, 'visible');
	}

	hideModal() {
		let block = this._render.selectRootElement('.block', true);
		this._render.removeClass(block, 'visible');
		this._render.addClass(block, 'hidden');
	}
	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}

