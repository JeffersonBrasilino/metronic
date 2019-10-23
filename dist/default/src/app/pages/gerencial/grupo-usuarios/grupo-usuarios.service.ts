import {BaseHttpService} from "../../../core/services/base-http.service";
import {Observable} from "rxjs";

export class GrupoUsuariosService extends BaseHttpService{
	usePath = '';
	getPosts(page=1): Observable<any>{
		return this.get('/posts?userId='+page);
	}
}
