import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PemantauanComponent } from './pemantauan.component';

describe('PemantauanComponent', () => {
  let component: PemantauanComponent;
  let fixture: ComponentFixture<PemantauanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PemantauanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PemantauanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
