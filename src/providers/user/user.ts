// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  url
  headers

  constructor(public api: ApiProvider) {
    console.log('Hello UserProvider Provider');
  }

  login(accountInfo: any){
    console.log(this.url);
    
    // let seq1 = this.api.put('api/reviews', accountInfo);
    let seq = this.api.post('rest-auth/login/', accountInfo);
    // console.log("put action")
    // console.log(seq);
    // console.log(seq1);

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        // this._loggedIn(res);
        console.log("succes post");
      }
    }, err => {
      console.error('ERROR', err);
    });

   
    return seq;

  }

  // _loggedIn(resp) {
  //   this._user = resp.user;
  // }

}
