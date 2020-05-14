import {Component, NgModule, OnInit} from '@angular/core';
import { GameItemFormComponent } from '../game-item-form/game-item-form.component';

@NgModule({
  imports: [],
  exports: [GameItemFormComponent],
  declarations: [GameItemFormComponent],
  providers: []
})

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
