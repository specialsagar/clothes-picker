import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapshotModelComponent } from './snapshot-model.component';

describe('SnapshotModelComponent', () => {
  let component: SnapshotModelComponent;
  let fixture: ComponentFixture<SnapshotModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnapshotModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnapshotModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
