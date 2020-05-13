import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService} from '../ApiService';
import { GameItemComponent } from './game-item.component';
import { Router } from '@angular/router';

// define suite- grp of related tests
// it()  defice spec(test)
fdescribe('GameItemComponent', () => {
  // let component: GameItemComponent;
  // let fixture: ComponentFixture<GameItemComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ GameItemComponent ]
  //   })
  //       .compileComponents();
  //   component = new GameItemComponent(this.quantity, this.price);
  // }));
  //
  // beforeEach(() => {
  //   fixture = TestBed.createComponent(GameItemComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should emit on click', () => {
  //   const fixture = TestBed.createComponent(GameItemComponent);
  //   // spy on event emitter
  //   const component = fixture.componentInstance;
  //   spyOn(component.detail, 'emit');
  //
  //   // trigger the click
  //   const nativeElement = fixture.nativeElement;
  //   const button = nativeElement.querySelector('.detail');
  //   button.dispatchEvent(new Event('click'));
  //
  //   fixture.detectChanges();
  //
  //   expect(component.detail.emit).toHaveBeenCalledWith('hello');
  // });

  it('should contain _id', () => {
    let obj = {
      buyers: [],
      category: "3434",
      date: "1588900022102",
      description: "123",
      isSold: false,
      price: 123,
      productName: "3434",
      quantity: 1,
      __v: 0,
      _id: "5eb4b0b62bfbd002dc015be0",
      __proto__: Object
    };
    // let test = component.onDetail(obj);
    expect(Object.keys(obj)).toContain('_id');
  });
});
