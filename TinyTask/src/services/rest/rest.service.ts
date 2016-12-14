import {Injectable} from "@angular/core";
import {AuthService} from '../../services/auth/auth.service';
import {AuthHttp, tokenNotExpired} from 'angular2-jwt';


@Injectable()
export class RestService{
  API: string = "https://tinytaskrest.herokuapp.com";
  error: string;
  auth: AuthService;
  constructor(private authHttp: AuthHttp){

  }

  get<T>(url: any, par: any): Promise<T>{
    return this.authHttp.get(`${this.API}/${url}${par}`)
      .toPromise()
      .then(response => response.json().data as T)
      .catch(this.handleError);
  }

  getAll<T>(url: any, par: any): Promise<T[]>{
    return this.authHttp.get(`${this.API}/${url}${par}`)
      .toPromise()
      .then(response => response.json().data as T[])
      .catch(this.handleError);
  }


  post<T>(url: any, data: any, par: any): Promise<T>{
    return this.authHttp
      .post(`${this.API}/${url}${par}`, data)
      .toPromise()
      .then(res => res.json().data as T)
      .catch(this.handleError);
  }

  put<T>(url: any, data: any, par: any): Promise<T>{
    return this.authHttp
      .put(`${this.API}/${url}${par}`, data)
      .toPromise()
      .then(res => res.json().data as T)
      .catch(this.handleError);
  }

  delete(url: any, par: any) {
    return this.authHttp.delete(`${this.API}/${url}${par}`)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
