import { TestBed, inject } from '@angular/core/testing';
import { RestService } from './rest.service';

describe('Service: Rest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestService],
    });
  });

  it('should ...', inject([RestService], (service: RestService) => {
    expect(service).toBeTruthy();
  }));
});
