import {TestBed} from '@angular/core/testing';

import {MyFakeService} from './my-fake.service';

describe('MyFakeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyFakeService = TestBed.get(MyFakeService);
    expect(service).toBeTruthy();
  });
});
