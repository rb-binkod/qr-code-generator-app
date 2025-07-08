import { TestBed } from '@angular/core/testing';
import { QrStorageService } from './qr-storage.service';


describe('QrStorageService', () => {
  let service: QrStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QrStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
