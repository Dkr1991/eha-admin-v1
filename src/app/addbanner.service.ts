import { BaseURL } from './../common';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';   
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch'; 
import 'rxjs/add/observable/throw';
@Injectable({
  providedIn: 'root'
})
export class AddbannerService { 
           
  private userURL = BaseURL+ "/v1";
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers: this.headers})
  private userdata=[]; 
  

  constructor(private http: Http, private router: Router, private route: ActivatedRoute,) { }

  public addbanner(data) 
  {
  return this.http.post( this.userURL+'/banner/post ', JSON.stringify(data), { headers: this.headers})
  }
}