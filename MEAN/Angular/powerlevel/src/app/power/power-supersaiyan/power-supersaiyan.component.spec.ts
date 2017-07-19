import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerSupersaiyanComponent } from './power-supersaiyan.component';

describe('PowerSupersaiyanComponent', () => {
  let component: PowerSupersaiyanComponent;
  let fixture: ComponentFixture<PowerSupersaiyanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerSupersaiyanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerSupersaiyanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
