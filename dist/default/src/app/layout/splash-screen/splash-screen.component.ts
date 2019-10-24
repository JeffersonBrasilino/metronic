import {ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnInit, Renderer2} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
	selector: 'splash-screen',
	templateUrl: './splash-screen.component.html',
	styleUrls: ['./splash-screen.component.scss'],
	animations: [
		trigger('splashTransition', [

			transition('visible => hidden', [
				animate('0.3s linear',style({visibility: 'hidden', opacity: 0}))
			]),

			transition(':enter', [
				style({visibility: 'hidden', opacity: 0}),
				animate('0.3s linear',style({visibility: 'visible', opacity: 1}))
			])
		])
	]
})
export class SplashScreenComponent implements OnInit {

	status: 'hidden' | 'visible';

	constructor(private _dr: ChangeDetectorRef, private _element: ElementRef, private _renderer: Renderer2) {
	}

	ngOnInit() {
		this.show();
	}

	show() {
			this.status = 'visible';
			this._dr.markForCheck();
	}

	hide() {
			this.status = 'hidden';
			this._dr.markForCheck();
	}
	onDone(event){
		if(event.toState == 'hidden')
			this._element.nativeElement.remove();
	}
}
