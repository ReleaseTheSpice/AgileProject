import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameItemListComponent } from './game-item-list.component';

describe('GameItemListComponent', () => {
  let component: GameItemListComponent;
  let fixture: ComponentFixture<GameItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
