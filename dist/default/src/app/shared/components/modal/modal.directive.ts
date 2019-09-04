import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
	selector: '[shared-modal]',
	exportAs: 'shared-modal'
})
export class ModalDirective {

	constructor(public vcr: ViewContainerRef) {
	}

}
