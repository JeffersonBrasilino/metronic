import {ChangeDetectorRef, Component, OnChanges, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ModalComponent, ModalConfig} from "../../../shared/components/modal/modal.component";

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class SigninComponent implements OnInit, OnChanges {

	@ViewChild(ModalComponent,{static:false}) modal: ModalComponent;
	modalOptions: ModalConfig = {
		type: 'confirm',
		message: 'Deseja realmente logar com essas credenciais?',
		content:{
			header:'header',
			footer: 'footer',
			body: 'patrickuino'
		},
		modalOptions:{backdrop: "static"}
	};

	constructor(private dr: ChangeDetectorRef) {}
	ngOnInit(): void {

	}
	ngOnChanges(): void {
		console.log('mudou no signin');
	}

	openModal(){
		this.modal.open();
	}
	getStatus($event){
		console.log($event);
	}
}
