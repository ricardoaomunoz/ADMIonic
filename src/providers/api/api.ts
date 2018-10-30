import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable()
export class ApiProvider {
  url
  // url: string = 'http://google.com';
  account: { username: string, password: string };
  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
    this.url = localStorage.getItem('url')
  }
  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }

    return this.http.get(this.url + '/' + endpoint, reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    this.account = { 
      username:body.value.email,
      password:body.value.password
  };
    console.log(this.account);
    console.log("push http");
    
    this.http.post(this.url + endpoint, this.account, reqOpts).subscribe(res => {
      console.log(res);
    
    });
    return this.http.post(this.url + endpoint, this.account, reqOpts);
    
    // return 'err';
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    this.account = { 
      username:body.value.email,
      password:body.value.password
  };
    return this.http.put(this.url + '/' + endpoint, this.account, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
  }

}
