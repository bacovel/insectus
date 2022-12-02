import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanuriComponent } from './planuri.component';

describe('PlanuriComponent', () => {
  let component: PlanuriComponent;
  let fixture: ComponentFixture<PlanuriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanuriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanuriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
