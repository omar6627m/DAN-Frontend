import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidelineSectionComponent } from './guideline-section.component';

describe('GuidelineSectionComponent', () => {
  let component: GuidelineSectionComponent;
  let fixture: ComponentFixture<GuidelineSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuidelineSectionComponent]
    });
    fixture = TestBed.createComponent(GuidelineSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
