import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerSupersaiyanfourComponent } from './power-supersaiyanfour.component';

describe('PowerSupersaiyanfourComponent', () => {
  let component: PowerSupersaiyanfourComponent;
  let fixture: ComponentFixture<PowerSupersaiyanfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerSupersaiyanfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerSupersaiyanfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
