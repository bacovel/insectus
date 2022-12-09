import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DovadaComponent } from './dovada.component';

describe('DovadaComponent', () => {
  let component: DovadaComponent;
  let fixture: ComponentFixture<DovadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DovadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DovadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
