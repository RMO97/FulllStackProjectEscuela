import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExperienciaComponent } from './add-experiencia.component';

describe('AddExperienciaComponent', () => {
  let component: AddExperienciaComponent;
  let fixture: ComponentFixture<AddExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
