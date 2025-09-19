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

  it('should return transport type name for a known ID', () => {
    component.transportTypes = [
      { ID: 1, type: 'Autoturism' },
      { ID: 2, type: 'Autobuz' }
    ] as any;

    const result = component.getTransportNameByID(2);

    expect(result).toBe('Autobuz');
  });

  it('should return fallback for unknown transport type ID', () => {
    component.transportTypes = [
      { ID: 1, type: 'Autoturism' }
    ] as any;

    const result = component.getTransportNameByID(3);

    expect(result).toBe('Tip necunoscut');
  });
});
