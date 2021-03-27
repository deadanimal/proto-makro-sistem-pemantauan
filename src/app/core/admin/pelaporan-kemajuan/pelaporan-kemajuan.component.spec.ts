import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PelaporanKemajuanComponent } from './pelaporan-kemajuan.component';

describe('PelaporanKemajuanComponent', () => {
  let component: PelaporanKemajuanComponent;
  let fixture: ComponentFixture<PelaporanKemajuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PelaporanKemajuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PelaporanKemajuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
