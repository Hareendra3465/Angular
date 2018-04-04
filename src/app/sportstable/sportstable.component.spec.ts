import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportstableComponent } from './sportstable.component';

describe('SportstableComponent', () => {
  let component: SportstableComponent;
  let fixture: ComponentFixture<SportstableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportstableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
