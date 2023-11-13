import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieNotFoundComponent } from './movie-not-found.component';

describe('MovieNotFoundComponent', () => {
  let component: MovieNotFoundComponent;
  let fixture: ComponentFixture<MovieNotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieNotFoundComponent]
    });
    fixture = TestBed.createComponent(MovieNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
