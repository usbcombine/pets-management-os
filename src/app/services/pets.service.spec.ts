import { TestBed } from '@angular/core/testing';
import { PetsService } from './pets.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { mockPet } from '../mocks/pets.mocks';

describe('PetsService', () => {
  let service: PetsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PetsService],
    });
    service = TestBed.inject(PetsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('should call http', () => {
    it('get(url) on service.all()', () => {
      service.all().subscribe((result) => {
        expect(result).toEqual([mockPet]);
      });
      httpTestingController
        .expectOne(
          service['getUrl']() + `/findByStatus?status=${mockPet.status}`
        )
        .flush([mockPet]);
      httpTestingController.verify();
    });

    it('post(url, model) on service.create(model)', () => {
      service.create(mockPet).subscribe((result) => {
        expect(result).toEqual(mockPet);
      });
      httpTestingController.expectOne(service['getUrl']()).flush(mockPet);
      httpTestingController.verify();
    });

    it('put(url(model.id), model) on service.update(model)', () => {
      service.update(mockPet).subscribe((result) => {
        expect(result).toEqual(mockPet);
      });
      httpTestingController
        .expectOne(service['getUrlWithId'](mockPet.id))
        .flush(mockPet);
      httpTestingController.verify();
    });

    it('delete(url(model.id) on service.delete(model))', () => {
      service.delete(mockPet).subscribe((result) => {
        expect(result).toEqual(mockPet);
      });
      httpTestingController
        .expectOne(service['getUrlWithId'](mockPet.id))
        .flush(mockPet);
      httpTestingController.verify();
    });
  });
});
