import {
	ChangeDetectorRef,
	Component,
	OnInit,
	TemplateRef,
	ViewChild,
} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, Validators} from "@angular/forms";
import {Observable, pipe} from "rxjs";
import {debounceTime, delay, map, take} from "rxjs/operators";
import {AuthService} from "../auth.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
	selector: 'signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

	submiting = false;
	@ViewChild('dialog',{static: false}) dialogContent: TemplateRef<any>;

	constructor(
		private _fb: FormBuilder,
		private _dr: ChangeDetectorRef,
		private _service: AuthService,
		private _dialog: MatDialog
	) {
	}

	ngOnInit() {
	}

	//formulário
	form = this._fb.group({
		nome: [null, Validators.required],
		email: [null, Validators.required],
		login: [null, Validators.required],
		senha: [null, Validators.required]
	});

	//submit do formlário
	onSubmit() {
		this._dialog.open(this.dialogContent,{disableClose:true});

		/*this.submiting = true;
		this._service.signup(Object.assign(this.form.value,{status:0})).subscribe(
			(res)=>{
				this.submiting = false;
				this._dr.markForCheck();
			}
		);*/

	}

}
