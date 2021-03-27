import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PelaporanKewanganComponent } from './pelaporan-kewangan.component';

describe('PelaporanKewanganComponent', () => {
  let component: PelaporanKewanganComponent;
  let fixture: ComponentFixture<PelaporanKewanganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PelaporanKewanganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PelaporanKewanganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
