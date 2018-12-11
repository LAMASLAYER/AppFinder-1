import { TestBed } from '@angular/core/testing';

import { ConnexionServiceService } from './connexion-service.service';

describe('ConnexionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConnexionServiceService = TestBed.get(ConnexionServiceService);
    expect(service).toBeTruthy();
  });
});
