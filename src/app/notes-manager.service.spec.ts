import { TestBed } from '@angular/core/testing';

import { NotesManagerService } from './notes-manager.service';

describe('NotesManagerService', () => {
  let service: NotesManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotesManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
