import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { RestangularConfigFactory } from '../shared/restconfig';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PromotionService {

  constructor(private restangular: Restangular, private processHttpMsgService: ProcessHttpmsgService) { }

  getPromotions(): Observable<Promotion[]>{
  	return this.restangular.all('promotions').getList();  
  }

  getPromotion(id:number): Observable<Promotion> {
  	return this.restangular.one('promotions',id).get();
  } 

  getFeaturedPromotion(): Observable<Promotion>{
  	return this.restangular.all('promotions').getList({featured:true})
    .map(promotions => promotions[0]);
  }

}
