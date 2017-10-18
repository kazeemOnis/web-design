import { Injectable } from '@angular/core';
import { Feedback } from '../shared/feedback';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { RestangularConfigFactory } from '../shared/restconfig';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class FeedbackService {

  constructor(private restangular: Restangular, private processHttpMsgService: ProcessHttpmsgService) { }

 submitFeedback(feedback:Feedback): Observable<Feedback> {
  	return this.restangular.all('feedback').post(feedback);
  }

}
