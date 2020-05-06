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
    _id:"",
    name:"",
    description:"",
    imgSrc: "",
    gameTitle: "",
    price: "",
    datePosted: "",
    isSold: false
  };

  constructor(private gameItemService: GameItemService) { }


  itemInfo(ev) {
    return this.game = ev;
  }
  ngOnInit(): void {
    // this.gameItems = this.gameItemService.get();
  }

}
