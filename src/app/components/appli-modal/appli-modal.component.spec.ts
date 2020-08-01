import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliModalComponent } from './appli-modal.component';

describe('AppliModalComponent', () => {
  let component: AppliModalComponent;
  let fixture: ComponentFixture<AppliModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
