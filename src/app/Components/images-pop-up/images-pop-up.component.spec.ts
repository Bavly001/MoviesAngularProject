import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesPopUpComponent } from './images-pop-up.component';

describe('ImagesPopUpComponent', () => {
  let component: ImagesPopUpComponent;
  let fixture: ComponentFixture<ImagesPopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagesPopUpComponent]
    });
    fixture = TestBed.createComponent(ImagesPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
