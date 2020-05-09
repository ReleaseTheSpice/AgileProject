import { Component, OnInit, Inject, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { GameItemService} from "../game-item.service";
import validate = WebAssembly.validate;
import { lookupGameList } from "../providers";

@Component({
  selector: 'app-game-item-form',
  templateUrl: './game-item-form.component.html',
  styleUrls: ['./game-item-form.component.css']
})
export class GameItemFormComponent implements OnInit {
  form: FormGroup;
  @Input() showForm: boolean;


  onSubmit(gameItem){
    gameItem["datePosted"] = Date.now();
    console.log(gameItem);
    this.gameItemComponent.add(gameItem);
  }

  constructor(private FormBuilder: FormBuilder,
              private gameItemComponent: GameItemService,
              @Inject(lookupGameList) public lookupLists) {}

  ngOnInit(): void {
    this.form = this.FormBuilder.group({
      gameTitle: this.FormBuilder.control('Maple Story'),
      itemName: this.FormBuilder.control("", Validators.compose([
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      price: this.FormBuilder.control("", Validators.compose([
        Validators.pattern('[0-9]+')
      ])),
      description: this.FormBuilder.control("")
    });

  }

  toggleChild(){
    this.showForm = !this.showForm;
  }


}
