import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleekestComponent } from './sleekest.component';

describe('SleekestComponent', () => {
  let component: SleekestComponent;
  let fixture: ComponentFixture<SleekestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SleekestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SleekestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
