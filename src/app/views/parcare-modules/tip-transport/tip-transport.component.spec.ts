import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipTransportComponent } from './tip-transport.component';

describe('TipTransportComponent', () => {
  let component: TipTransportComponent;
  let fixture: ComponentFixture<TipTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipTransportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
