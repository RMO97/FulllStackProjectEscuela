import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciasListComponent } from './experiencias-list.component';

describe('ExperienciasListComponent', () => {
  let component: ExperienciasListComponent;
  let fixture: ComponentFixture<ExperienciasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciasListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
