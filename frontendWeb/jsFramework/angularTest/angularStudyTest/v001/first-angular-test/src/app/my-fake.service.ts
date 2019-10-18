import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFakeService {

  constructor() { }

  getMessage() {
    return 'fake service';
  }
}
