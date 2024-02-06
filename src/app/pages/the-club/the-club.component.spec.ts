import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheClubComponent } from './the-club.component';

describe('TheClubComponent', () => {
  let component: TheClubComponent;
  let fixture: ComponentFixture<TheClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheClubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
