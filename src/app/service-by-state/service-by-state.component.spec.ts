import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceByStateComponent } from './service-by-state.component';

describe('ServiceByStateComponent', () => {
  let component: ServiceByStateComponent;
  let fixture: ComponentFixture<ServiceByStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceByStateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceByStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
