import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeuilleHomeComponent } from './feuille-home.component';

describe('FeuilleHomeComponent', () => {
  let component: FeuilleHomeComponent;
  let fixture: ComponentFixture<FeuilleHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeuilleHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeuilleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
