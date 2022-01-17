import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointDiffColorComponent } from './point-diff-color.component';

describe('PointDiffColorComponent', () => {
  let component: PointDiffColorComponent;
  let fixture: ComponentFixture<PointDiffColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointDiffColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointDiffColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
