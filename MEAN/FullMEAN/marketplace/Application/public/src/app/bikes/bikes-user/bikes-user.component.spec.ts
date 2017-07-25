import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesUserComponent } from './bikes-user.component';

describe('BikesUserComponent', () => {
  let component: BikesUserComponent;
  let fixture: ComponentFixture<BikesUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikesUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
