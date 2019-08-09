import {ChangeDetectorRef, Component, OnChanges, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ModalComponent, ModalConfig} from "../../../shared/components/modal/modal.component";

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class SigninComponent implements OnInit {

	@ViewChild(ModalComponent,{static:false}) modal: ModalComponent;
	modalOptions: ModalConfig;
	constructor(private dr: ChangeDetectorRef) {
		this.modalOptions = {
			type: 'default',
			message: 'aguarde...',
			content:{
				header:'header',
				footer: 'footer',
				body: 'body'
			},
			modalOptions:{backdrop: "static"}
		}
	}
	ngOnInit(): void {
		setTimeout(()=>{
			this.modal.open();
		})
	}
}
