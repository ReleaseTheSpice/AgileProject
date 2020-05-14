import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {AppModule} from '../app.module';
import {Login} from './app.login';

describe('LoginComponent', () => {
    let component: Login;
    let fixture: ComponentFixture<Login>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Login);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should test component values', () => {
        expect(component.errorMessage).toEqual('');
        expect(component.username).toEqual('');
        expect(component.password).toBe('');
    });

    it('should fail login', () => {
        component.username = 'test';
        component.password = 'test';
        component.login();
        expect(component.errorMessage).toEqual('');
    });
});
