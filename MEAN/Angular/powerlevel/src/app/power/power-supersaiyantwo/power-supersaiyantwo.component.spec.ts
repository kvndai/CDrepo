import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerSupersaiyantwoComponent } from './power-supersaiyantwo.component';

describe('PowerSupersaiyantwoComponent', () => {
  let component: PowerSupersaiyantwoComponent;
  let fixture: ComponentFixture<PowerSupersaiyantwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerSupersaiyantwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerSupersaiyantwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
