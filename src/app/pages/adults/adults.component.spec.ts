import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultsComponent } from './adults.component';

describe('AdultComponent', () => {
  let component: AdultsComponent;
  let fixture: ComponentFixture<AdultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
