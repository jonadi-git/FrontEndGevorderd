import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactorenComponent } from './reactoren.component';

describe('ReactorenComponent', () => {
  let component: ReactorenComponent;
  let fixture: ComponentFixture<ReactorenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactorenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactorenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
