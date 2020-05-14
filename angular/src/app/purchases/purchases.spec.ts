import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {AppModule} from '../app.module';
import {Purchases} from './app.purchases';

describe('LoginComponent', () => {
    let component: Purchases;
    let fixture: ComponentFixture<Purchases>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Purchases);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
