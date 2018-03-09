import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';

@Injectable()
export class ValueService {
  getValue(): string {
    return 'real value';
  }

  getObservableValue(): Observable<string> {
    return Observable.from(['observable value']);
  }

  getPromiseValue(): Promise<string> {
    return new Promise(
      resolve => { resolve('promise value'); }
    );
  }
}

@Injectable()
export class MasterService {
  constructor(private masterService: ValueService) { }
  getValue() { return this.masterService.getValue(); }
}

@Injectable()
export class FakeValueService {
  getValue(): string {
    return 'faked service value';
  }
}
