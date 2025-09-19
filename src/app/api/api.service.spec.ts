import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call addTransportTypeFn with POST request to correct URL', () => {
    const mockType = 'Bus';
    const mockResponse = { success: true };
    let actualResponse: any;

    service.addTransportTypeFn(mockType).subscribe(response => {
      actualResponse = response;
    });

    const req = httpTestingController.expectOne('http://134.209.90.166:8090/admin/transportType');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ type: mockType });

    req.flush(mockResponse);

    expect(actualResponse).toEqual(mockResponse);
  });
});
