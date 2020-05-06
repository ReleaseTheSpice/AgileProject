import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css']
})
export class GameItemComponent implements OnInit {
  @Input() gameItem;
  @Output() buy = new EventEmitter();
  @Output() detail = new EventEmitter();

  values = '';
  onClick(event){
    // console.log(event);
  }

  onBuy() {
    console.log("buy");
    this.buy.emit(this.gameItem);
  }
  onDetail(gameObj) {
    this.detail.emit(gameObj);
  }
  constructor() { }

  ngOnInit(): void {

  }
}
