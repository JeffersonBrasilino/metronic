import {Component, OnInit} from "@angular/core";
import {LayoutService} from "../../../layout/layout.service";

@Component({
	selector: "app-form",
	templateUrl: "./form.component.html",
	styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
	constructor(private _layoutService: LayoutService) {
		this._layoutService.config = {
			subHeader: {
				title: 'Usuario',
				linkReturnButton: '/user/list'
			}
		}
	}

	ngOnInit() {
	}
}
