import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEditorialesComponent } from './add-edit-editoriales.component';

describe('AddEditEditorialesComponent', () => {
  let component: AddEditEditorialesComponent;
  let fixture: ComponentFixture<AddEditEditorialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditEditorialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditEditorialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
