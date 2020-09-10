import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemsComponent } from './thems.component';

describe('ThemsComponent', () => {
  let component: ThemsComponent;
  let fixture: ComponentFixture<ThemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
