import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstationComponent } from './estation.component';

describe('EstationComponent', () => {
  let component: EstationComponent;
  let fixture: ComponentFixture<EstationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
