import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {AppModule} from '../app.module';
import {Sales} from './app.sales';

describe('LoginComponent', () => {
    let component: Sales;
    let fixture: ComponentFixture<Sales>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Sales);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should test values', () => {
        expect(component._errorMessage).toEqual('');
    });

    it('should', () => {
        component.showContentIfLoggedIn();
        expect(component.message).toEqual('Not logged in.');
        expect(component.token).toEqual('');
    });


});
