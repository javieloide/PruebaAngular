import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NasaService } from './nasa.service';

describe('NasaService', () => {
  let service: NasaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NasaService]
    });
    service = TestBed.inject(NasaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getDataExample function', () => {
    const service: NasaService = TestBed.get(NasaService);
    expect(service.getDataExample).toBeTruthy();
  });

  it('should have getLastSixDays function', () => {
    const service: NasaService = TestBed.get(NasaService);
    expect(service.getLastSixDays).toBeTruthy();
  });

  it('should have getDataByDate function', () => {
    const service: NasaService = TestBed.get(NasaService);
    expect(service.getDataByDate).toBeTruthy();
  });

});
