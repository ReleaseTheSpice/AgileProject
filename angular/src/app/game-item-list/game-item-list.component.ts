import { Component, OnInit, Input } from '@angular/core';
import { GameItemService} from '../game-item.service';

@Component({
  selector: 'app-game-item-list',
  templateUrl: './game-item-list.component.html',
  styleUrls: ['./game-item-list.component.css']
})
export class GameItemListComponent implements OnInit {
  @Input() gameItems

  constructor(private gameItemService: GameItemService) { }

  ngOnInit(): void {
    // this.gameItems = this.gameItemService.get();
  }

}
