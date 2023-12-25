import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitySectionComponent } from './community-section.component';

describe('CommunitySectionComponent', () => {
  let component: CommunitySectionComponent;
  let fixture: ComponentFixture<CommunitySectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommunitySectionComponent]
    });
    fixture = TestBed.createComponent(CommunitySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
