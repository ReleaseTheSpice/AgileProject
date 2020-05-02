import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameItemFormComponent } from './game-item-form.component';

describe('GameItemFormComponent', () => {
  let component: GameItemFormComponent;
  let fixture: ComponentFixture<GameItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameItemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
