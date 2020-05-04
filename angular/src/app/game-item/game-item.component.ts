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

  onBuy (){
    console.log("buy");
    this.buy.emit(this.gameItem);
  }
  onDetail (){
    console.log("detail");
    this.detail.emit(this.gameItem);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
