import {ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, Validators} from "@angular/forms";
import {Observable, pipe} from "rxjs";
import {debounceTime, delay, map, take} from "rxjs/operators";
import {AuthService} from "../auth.service";

@Component({
	selector: 'signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

	submiting = false;

	constructor(private _fb: FormBuilder, private _dr: ChangeDetectorRef, private _service: AuthService) {
	}

	ngOnInit() {}

	//formulário
	form = this._fb.group({
		nome: [null, Validators.required],
		email: [null, Validators.required],
		login: [null, Validators.required],
		senha: [null, Validators.required]
	});

	//submit do formlário
	onSubmit() {
		this.submiting = true;
		console.log(this.form.value);
		this._service.signup(this.form.value).subscribe(
			(res)=>{
				console.log(res);
				this.submiting = false;
				this._dr.markForCheck();
			}
		);
		/*setTimeout(()=>{
			console.log('complete');
			this.submiting = false;
			this._dr.markForCheck();
		},2000);*/
	}

	validateNomeCompleto(e: string) {
		/*let a = new Observable(
			subscriber => {
				if (this.form.value.email != 'hue')
					this.form.controls['email'].setErrors({'emailExists': true});

			}
		).subscribe()*/
	}

}
