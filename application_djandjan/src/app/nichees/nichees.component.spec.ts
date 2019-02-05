import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NicheesComponent } from './nichees.component';

describe('NicheesComponent', () => {
  let component: NicheesComponent;
  let fixture: ComponentFixture<NicheesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NicheesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NicheesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
