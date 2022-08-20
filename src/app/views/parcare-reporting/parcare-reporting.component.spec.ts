import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcaredashComponent } from './parcare-reporting.component';

describe('ParcaredashComponent', () => {
  let component: ParcaredashComponent;
  let fixture: ComponentFixture<ParcaredashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParcaredashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcaredashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
