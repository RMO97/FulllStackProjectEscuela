import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEstudianteComponent } from './edit-estudiante.component';

describe('EditEstudianteComponent', () => {
  let component: EditEstudianteComponent;
  let fixture: ComponentFixture<EditEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEstudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
