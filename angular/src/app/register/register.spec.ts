import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Register } from './app.register';
import { FormsModule, ReactiveFormsModule }      from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('Register', () => {
    let component: Register;
    let fixture: ComponentFixture<Register>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ Register ],
            imports: [FormsModule, HttpClientModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Register);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should have defined component', () => {
        expect(component).toBeDefined();
    });
    it('should be invalid email', () => {
        component.email = 'test';
        expect(component.validEmail()).toBe(false);
        fixture.detectChanges();
    });
});
