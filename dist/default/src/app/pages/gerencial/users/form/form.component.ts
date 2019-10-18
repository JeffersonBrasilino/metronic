import {Component, OnInit} from '@angular/core';
import {LayoutService} from '../../../../layout/layout.service';
import {FormArray, FormBuilder, Validators} from '@angular/forms';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

	//construtor do component
	constructor(private _layoutService: LayoutService, private _fb: FormBuilder) {
		this._layoutService.config = {
			subHeader: {
				title: 'Usuario', //nome do módulo ALTERAR
				linkReturnButton: '/gerencial/usuario/list' //link do botao de cadastro
			}
		};
	}

	ngOnInit() {
	}

	//formulário
	form = this._fb.group({
		name: ['', Validators.required],
		email: ['', Validators.required],
		cpf: ['', Validators.required],
		dynamicField: this._fb.array([])
	});

	//instancia dos campos dinamicos
	get dynamicField() {
		return this.form.get('dynamicField') as FormArray;
	}

	//adiciona campos dinamicos
	adddynamicField() {
		this.dynamicField.push(
			this._fb.group(
				{
					dinamicField1: [''],
					dinamicField2: ['']
				}
			)
		);
	}

	//submit do formlário
	onSubmit() {
		console.log(this.form.value);
	}
}
