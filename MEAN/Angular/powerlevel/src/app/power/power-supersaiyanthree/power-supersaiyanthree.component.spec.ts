import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerSupersaiyanthreeComponent } from './power-supersaiyanthree.component';

describe('PowerSupersaiyanthreeComponent', () => {
  let component: PowerSupersaiyanthreeComponent;
  let fixture: ComponentFixture<PowerSupersaiyanthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerSupersaiyanthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerSupersaiyanthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
