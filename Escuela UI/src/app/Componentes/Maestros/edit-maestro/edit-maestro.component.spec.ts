import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMaestroComponent } from './edit-maestro.component';

describe('EditMaestroComponent', () => {
  let component: EditMaestroComponent;
  let fixture: ComponentFixture<EditMaestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMaestroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
