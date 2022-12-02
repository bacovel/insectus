import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivatieComponent } from './motivatie.component';

describe('MotivatieComponent', () => {
  let component: MotivatieComponent;
  let fixture: ComponentFixture<MotivatieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotivatieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotivatieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
