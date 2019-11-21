import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class HttpInterceptorService implements HttpInterceptor {
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const token = localStorage.getItem('token');

		let request:HttpRequest<any>;
		if(token){
			request = req.clone({
				setHeaders: {
					Authorization: `Bearer ${token}`
				}
			});
		}else{
			request = req.clone();
		}

		return next.handle(request);
	}
}
