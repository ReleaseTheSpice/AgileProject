import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {Main} from './app.main';
import { GameItemListComponent} from '../game-item-list/game-item-list.component';
import {AppModule} from '../app.module';
import {type} from 'os';

describe('Main Component', () => {
    let component: Main;
    let fixture: ComponentFixture<Main>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppModule],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Main);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('checks component values', () => {
        expect(component.price).toEqual(1);
    });

    it('tests clear form', () => {
        component.productName = "test";
        expect(component.productName).toEqual("test");
        component.clearForm();
        expect(component.productName).toEqual('');
    });

    it('adds a bad item', () => {
        component.createProduct();
        expect(component._errorMessage).toEqual('');
    });
});
