import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditLibrosComponent } from './add-edit-libros.component';

describe('AddEditLibrosComponent', () => {
  let component: AddEditLibrosComponent;
  let fixture: ComponentFixture<AddEditLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditLibrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
