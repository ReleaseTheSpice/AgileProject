import { Component, OnInit, Input } from '@angular/core';
import { GameItemService} from '../game-item.service';

@Component({
  selector: 'app-game-item-list',
  templateUrl: './game-item-list.component.html',
  styleUrls: ['./game-item-list.component.css']
})
export class GameItemListComponent implements OnInit {
  @Input() gameItems;
  game = {
    productName: "",
    category: "",
    description: "",
    price: "",
    date: "",
    quantity: "",
    isSold: false,
  };

  constructor(private gameItemService: GameItemService) { }

  haha(ev) {
    this.game = ev;
    console.log(this.game);

  }
  ngOnInit(): void {
    // this.gameItems = this.gameItemService.get();
  }

}
