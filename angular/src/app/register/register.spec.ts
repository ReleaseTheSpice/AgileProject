import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {AppModule} from '../app.module';
import {Register} from './app.register';

describe('LoginComponent', () => {
    let component: Register;
    let fixture: ComponentFixture<Register>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Register);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should test values', () => {
        expect(component.username).toEqual('');
        component.username = 'test';
        expect(component.username).toEqual('test');
    });

    it('should fail validate', () => {
        expect(component.validateUser()).toEqual(false);
        expect(component.validEmail()).toEqual(false);
        component.email = 'test@test.com';
        expect(component.validEmail()).toEqual(true);
        component.username = 'test';
        component.password = 'jjjj';
        component.passConf = 'jjjj';
        component.firstName = 'jeff';
        component.lastName = 'jeff';
        expect(component.validateUser()).toEqual(true);
    });

    it('should test add user', () => {
        component.addUser();
        expect(component.errorMessage).toEqual('Username must be more than 3 characters.');
        component.username = 'jeff';
        component.password = 'jeff';
        component.addUser();
        expect(component.errorMessage).toEqual('Password must be at least 7 characters.');
    });
});
