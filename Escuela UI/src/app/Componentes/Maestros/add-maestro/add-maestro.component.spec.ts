import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMaestroComponent } from './add-maestro.component';

describe('AddMaestroComponent', () => {
  let component: AddMaestroComponent;
  let fixture: ComponentFixture<AddMaestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMaestroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
