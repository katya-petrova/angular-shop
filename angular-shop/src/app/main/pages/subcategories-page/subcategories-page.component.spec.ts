import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoriesPageComponent } from './subcategories-page.component';

describe('SubcategoriesPageComponent', () => {
  let component: SubcategoriesPageComponent;
  let fixture: ComponentFixture<SubcategoriesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcategoriesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
