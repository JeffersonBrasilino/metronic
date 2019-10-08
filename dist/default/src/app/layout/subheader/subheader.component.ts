import {Component, OnDestroy, OnInit} from '@angular/core';
import {LayoutConfig, LayoutService} from "../layout.service";

@Component({
	selector: 'app-subheader',
	templateUrl: './subheader.component.html',
	styleUrls: ['./subheader.component.scss']
})
export class SubheaderComponent implements OnInit, OnDestroy {
	private _config: LayoutConfig;

	constructor(private _service: LayoutService) {
		this._service.layoutConfigService$.subscribe(res => {
			this._config = res;
		});
	}

	ngOnInit() {
		if (this._config == undefined) {
			throw new Error("configuracao do subheader inexistente, favor configurar via layoutService.");
		}
	}

	ngOnDestroy(): void {
		this._service.layoutConfigServiceInstance.unsubscribe();
	}
}
