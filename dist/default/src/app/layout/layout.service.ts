import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface LayoutConfig {
	subHeader: {
		title: string
		linkReturnButton?: string,
		linkAddButton?: string
	}

}

@Injectable()
export class LayoutService {
	public layoutConfigServiceInstance = new Subject<LayoutConfig>();
	public layoutConfigService$ = this.layoutConfigServiceInstance.asObservable();

	set config(conf:LayoutConfig){
		this.layoutConfigServiceInstance.next(conf);
	}
}
