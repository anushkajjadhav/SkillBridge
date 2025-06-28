import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorProfile } from './tutor-profile';

describe('TutorProfile', () => {
  let component: TutorProfile;
  let fixture: ComponentFixture<TutorProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
