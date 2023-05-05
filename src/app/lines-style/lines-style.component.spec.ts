import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinesStyleComponent } from './lines-style.component';

describe('LinesStyleComponent', () => {
  let component: LinesStyleComponent;
  let fixture: ComponentFixture<LinesStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinesStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinesStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
