import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePortafolioComponent } from './home-portafolio.component';

describe('HomePortafolioComponent', () => {
  let component: HomePortafolioComponent;
  let fixture: ComponentFixture<HomePortafolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePortafolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePortafolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
