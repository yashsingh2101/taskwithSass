import { Injectable } from '@angular/core';
import {Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommanService {

  constructor( private router: Router, private _http: HttpClient) { }

  /* This function checked is login or not login*/
  loggedIn() {
    if (localStorage.length > 1) {
      this.router.navigate(['/home']);
    } else {
      return !!localStorage.getItem( 'Bearer');
    }
  } // End Function

  /* Service calling with API */

  GetUserData() {
   return this._http.get<any>(' https://jsonplaceholder.typicode.com/todos/', {
     observe : 'response'
   });
  }

}
