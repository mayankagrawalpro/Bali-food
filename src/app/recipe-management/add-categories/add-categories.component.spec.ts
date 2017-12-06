import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoriesComponent } from './add-categories.component';

describe('AddCategoriesComponent', () => {
  let component: AddCategoriesComponent;
  let fixture: ComponentFixture<AddCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
