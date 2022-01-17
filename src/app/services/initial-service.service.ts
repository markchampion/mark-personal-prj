import { Injectable } from '@angular/core';
import {FacebookService, InitParams} from 'ngx-facebook';

@Injectable({
  providedIn: 'root'
})
export class InitialServiceService {

  constructor(private fb: FacebookService) {
    const initParams: InitParams = {
      appId: '1134315600090785',
      xfbml: true,
      version: 'v12.0'
    };

    fb.init(initParams).then(r => console.log(r))
      .catch(e => console.log('Error when init fb developer: ', e));
  }
}
