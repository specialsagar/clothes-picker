import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinatorComponent } from './combinator.component';

describe('CombinatorComponent', () => {
  let component: CombinatorComponent;
  let fixture: ComponentFixture<CombinatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombinatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
