import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Boda } from './boda';

describe('Boda', () => {
  let component: Boda;
  let fixture: ComponentFixture<Boda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Boda]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Boda);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
