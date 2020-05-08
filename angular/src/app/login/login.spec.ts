import {async, TestBed} from '@angular/core/testing';
import {Login} from './app.login';

describe('Login', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                Login
            ]
        }).compileComponents();
    }));
    it('should fail login', async(() => {
        const fixture = TestBed.createComponent(Login);
        const app = fixture.debugElement.componentInstance;
        app.username = 'sss';
        app.password = 'ssssssssssss';
        app.login();
        expect(app.errorMessage).toEqual('');
    }));
    it('should login', async(() => {
        const fixture = TestBed.createComponent(Login);
        const app = fixture.debugElement.componentInstance;
        app.username = 'n';
        app.password = 'n';
        app.login();
        expect(app.message).toEqual(undefined);
    }));
});
