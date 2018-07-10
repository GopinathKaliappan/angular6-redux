import { TestBed, inject } from '@angular/core/testing';

import { ReduxServiceService } from './redux-service.service';

describe('ReduxServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReduxServiceService]
    });
  });

  it('should be created', inject([ReduxServiceService], (service: ReduxServiceService) => {
    expect(service).toBeTruthy();
  }));
});
