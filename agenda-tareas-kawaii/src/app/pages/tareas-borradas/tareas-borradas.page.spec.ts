import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TareasBorradasPage } from './tareas-borradas.page';

describe('TareasBorradasPage', () => {
  let component: TareasBorradasPage;
  let fixture: ComponentFixture<TareasBorradasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasBorradasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
