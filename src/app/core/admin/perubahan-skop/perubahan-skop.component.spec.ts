import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerubahanSkopComponent } from './perubahan-skop.component';

describe('PerubahanSkopComponent', () => {
  let component: PerubahanSkopComponent;
  let fixture: ComponentFixture<PerubahanSkopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerubahanSkopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerubahanSkopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
