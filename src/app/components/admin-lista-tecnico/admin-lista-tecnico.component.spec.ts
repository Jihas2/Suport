import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListaTecnicoComponent } from './admin-lista-tecnico.component';

describe('AdminListaTecnicoComponent', () => {
  let component: AdminListaTecnicoComponent;
  let fixture: ComponentFixture<AdminListaTecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminListaTecnicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminListaTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
