import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffecientComponent } from './effecient.component';

describe('EffecientComponent', () => {
  let component: EffecientComponent;
  let fixture: ComponentFixture<EffecientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EffecientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EffecientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
