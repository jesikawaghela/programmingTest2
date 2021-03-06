import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataStructureComponent } from './data-structure.component';

describe('DataStructureComponent', () => {
  let component: DataStructureComponent;
  let fixture: ComponentFixture<DataStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
