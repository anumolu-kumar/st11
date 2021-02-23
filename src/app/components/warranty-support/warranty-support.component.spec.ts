import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantySupportComponent } from './warranty-support.component';

describe('WarrantySupportComponent', () => {
  let component: WarrantySupportComponent;
  let fixture: ComponentFixture<WarrantySupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarrantySupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarrantySupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
