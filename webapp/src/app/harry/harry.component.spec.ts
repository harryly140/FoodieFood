import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarryComponent } from './harry.component';

describe('HarryComponent', () => {
  let component: HarryComponent;
  let fixture: ComponentFixture<HarryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HarryComponent]
    });
    fixture = TestBed.createComponent(HarryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
