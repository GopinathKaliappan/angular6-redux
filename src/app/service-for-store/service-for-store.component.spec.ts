import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceForStoreComponent } from './service-for-store.component';

describe('ServiceForStoreComponent', () => {
  let component: ServiceForStoreComponent;
  let fixture: ComponentFixture<ServiceForStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceForStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceForStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
