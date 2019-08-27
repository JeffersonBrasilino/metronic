import {Injectable, EventEmitter} from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ModalService {
	emitter = new EventEmitter();
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
	}
}
