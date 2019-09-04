import {Injectable} from '@angular/core';
import {ModalComponent} from "./modal.component";
import {BsModalService} from "ngx-bootstrap";

@Injectable({
	providedIn: 'root'
})
export class ModalService {
	constructor(
		private _bsModalService: BsModalService,
	) {

	}

	open(){
		this._bsModalService.show(ModalComponent);
	}

	close(){

	}

	/*emitter = new EventEmitter();
	option: any;
	constructor() {
		console.log('init modal service');
	}

	openLoading(){
		this.emitter.emit({
			open: true,
			type: "loading",
			message: 'Entrando...',
			modalOptions: {backdrop: "static", keyboard: false}
		});
	}

	closeModal(){
		this.emitter.emit({close:true});
	}

	chancgeOptionsModal(options){
		this.emitter.emit(options);
	}*/
}
