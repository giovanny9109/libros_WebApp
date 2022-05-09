import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLibrosComponent } from './show-libros.component';

describe('ShowLibrosComponent', () => {
  let component: ShowLibrosComponent;
  let fixture: ComponentFixture<ShowLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowLibrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
