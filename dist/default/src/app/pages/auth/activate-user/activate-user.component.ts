import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {delay, map, take} from "rxjs/operators";
import {AuthService} from "../auth.service";

@Component({
	selector: 'activate-user',
	templateUrl: './activate-user.component.html',
	styleUrls: ['./activate-user.component.scss']
})
export class ActivateUserComponent implements OnInit {

	constructor(private _router: ActivatedRoute, private _dr: ChangeDetectorRef, private _service: AuthService) {
	}

	wait = true;
	success = true;

	ngOnInit() {
		this._router.paramMap.pipe(
			take(1),
		).subscribe((res: ParamMap) => {
			this.activateUser(res.get('userId'));
		})
	}

	activateUser(userId: string) {
		this._service.activateUser(userId).subscribe(res => {
			if(res.status == 'error')
				this.success = false;

			this.wait = false;
			this._dr.markForCheck()
		});
	}
}
