import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalizaComponent } from './analiza.component';

describe('AnalizaComponent', () => {
  let component: AnalizaComponent;
  let fixture: ComponentFixture<AnalizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalizaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
