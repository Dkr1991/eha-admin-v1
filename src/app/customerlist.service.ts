import { BaseURL } from './../common';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})

export class CustomerlistService {
  private headers = new Headers({'Content-Type' :'application/json'})
  private options = new RequestOptions({headers: this.headers})
  private userdata=[]; 

  constructor(private http: Http, private router: Router,) { }


  getcustomers(){
    let url = BaseURL+ "/v1/getroll/2";
    return this.http.get(url,{ headers: this.headers}).map(data => {
      let res = data;
       console.log(res); 
       return res;
  })
}



}
