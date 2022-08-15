import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoragePricesComponent } from './storage-prices.component';

describe('StoragePricesComponent', () => {
  let component: StoragePricesComponent;
  let fixture: ComponentFixture<StoragePricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoragePricesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoragePricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
