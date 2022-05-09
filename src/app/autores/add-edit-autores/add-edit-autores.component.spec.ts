import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAutoresComponent } from './add-edit-autores.component';

describe('AddEditAutoresComponent', () => {
  let component: AddEditAutoresComponent;
  let fixture: ComponentFixture<AddEditAutoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditAutoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditAutoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
