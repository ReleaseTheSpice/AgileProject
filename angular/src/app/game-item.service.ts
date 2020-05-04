import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GameItemService {
    gameItems = [
        {
            _id:1,
            name:"Echoing fury",
            description:"Only 14,000 US Dollar for Echoing fury one time chance only",
            imgSrc: "assets/img/fury.PNG",
            gameTitle: "Diablo2",
            price: "14,000",
            datePosted: "01/04/2015",
            isSold: false
        },
        {
            _id:2,
            name:"mace",
            description:"this item is sososososososo good!!!!",
            imgSrc: "",
            gameTitle: "Maplestory",
            price: "1",
            datePosted: "01/04/2015",
            isSold: true
        },
        {
            _id:3,
            name:"spear",
            description:"This is an epic item !!!!!!!!!!!!!!!!!!!!!!!!!!",
            imgSrc: "",
            gameTitle: "World of Warcraft",
            price: "15",
            datePosted: "01/04/2015",
            isSold: false
        },
        {
            _id:4,
            name:"Echoing fury",
            description:"Only 14,000 US Dollar for Echoing fury one time chance only",
            imgSrc: "assets/img/fury.PNG",
            title: "Diablo2",
            price: "14,000",
            datePosted: "01/04/2015",
            isSold: false
        }];

    get() {
        return this.gameItems;
    }

    add(gameItem){
        this.gameItems.push(gameItem)
    }
}
