import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EPermohonanComponent } from './e-permohonan.component';

describe('EPermohonanComponent', () => {
  let component: EPermohonanComponent;
  let fixture: ComponentFixture<EPermohonanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EPermohonanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EPermohonanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
