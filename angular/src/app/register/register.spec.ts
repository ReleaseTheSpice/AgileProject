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
});
