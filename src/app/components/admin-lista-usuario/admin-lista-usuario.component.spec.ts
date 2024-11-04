import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListaUsuarioComponent } from './admin-lista-usuario.component';

describe('AdminListaUsuarioComponent', () => {
  let component: AdminListaUsuarioComponent;
  let fixture: ComponentFixture<AdminListaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminListaUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminListaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
