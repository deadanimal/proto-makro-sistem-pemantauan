import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PelaporanComponent } from './pelaporan.component';

describe('PelaporanComponent', () => {
  let component: PelaporanComponent;
  let fixture: ComponentFixture<PelaporanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PelaporanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PelaporanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
