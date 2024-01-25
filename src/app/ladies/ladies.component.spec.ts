import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadiesComponent } from './ladies.component';

describe('LadiesComponent', () => {
  let component: LadiesComponent;
  let fixture: ComponentFixture<LadiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LadiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LadiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
