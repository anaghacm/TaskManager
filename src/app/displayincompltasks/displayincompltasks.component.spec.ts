import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayincompltasksComponent } from './displayincompltasks.component';

describe('DisplayincompltasksComponent', () => {
  let component: DisplayincompltasksComponent;
  let fixture: ComponentFixture<DisplayincompltasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayincompltasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayincompltasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
