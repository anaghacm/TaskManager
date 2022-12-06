import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaycompltasksComponent } from './displaycompltasks.component';

describe('DisplaycompltasksComponent', () => {
  let component: DisplaycompltasksComponent;
  let fixture: ComponentFixture<DisplaycompltasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaycompltasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaycompltasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
