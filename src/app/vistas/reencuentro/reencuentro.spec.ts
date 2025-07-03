import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reencuentro } from './reencuentro';

describe('Reencuentro', () => {
  let component: Reencuentro;
  let fixture: ComponentFixture<Reencuentro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reencuentro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reencuentro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
