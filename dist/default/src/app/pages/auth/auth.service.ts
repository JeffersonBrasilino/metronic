import {Injectable} from '@angular/core';
import {BaseHttpService} from "../../core/services/base-http.service";
import {HttpHeaders} from "@angular/common/http";

@Injectable({
	providedIn: 'root'
})
export class AuthService extends BaseHttpService {
	usePath = "/Login";

	hue() {
		var fd = new FormData();
		fd.append('usuario','intweb');
		fd.append('senha','UniSrv!15');
		fd.append('local','unimed');
		return this.post('', fd);
	}
}
