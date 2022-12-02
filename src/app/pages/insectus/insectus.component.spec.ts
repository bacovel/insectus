import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsectusComponent } from './insectus.component';

describe('InsectusComponent', () => {
  let component: InsectusComponent;
  let fixture: ComponentFixture<InsectusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsectusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsectusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
