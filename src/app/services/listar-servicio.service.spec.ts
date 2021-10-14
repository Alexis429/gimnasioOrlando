import { TestBed } from '@angular/core/testing';

import { ListarServicioService } from './listar-servicio.service';

describe('ListarServicioService', () => {
  let service: ListarServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
