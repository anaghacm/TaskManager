import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaytasksComponent } from './displaytasks.component';

describe('DisplaytasksComponent', () => {
  let component: DisplaytasksComponent;
  let fixture: ComponentFixture<DisplaytasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaytasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaytasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
