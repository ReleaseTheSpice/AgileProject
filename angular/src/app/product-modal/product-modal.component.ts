import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent implements OnInit {
  @Input() gameModal;

  constructor() { }

  haha(ev) {
    console.log(this.gameModal);
  }
  ngOnInit() {
    // console.log(this.gameModal);
  }

}
