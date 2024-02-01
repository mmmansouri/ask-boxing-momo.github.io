import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessToLocalsComponent } from './access-to-locals.component';

describe('AccessToLocalsComponent', () => {
  let component: AccessToLocalsComponent;
  let fixture: ComponentFixture<AccessToLocalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessToLocalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccessToLocalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
