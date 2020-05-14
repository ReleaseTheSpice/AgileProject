import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {Forum} from './app.forum';
import {AppModule} from '../app.module';

describe('ForumComponent', () => {
    let component: Forum;
    let fixture: ComponentFixture<Forum>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Forum);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should get component values', () => {
        expect(component.admin).toEqual(false);
        expect(component._content).toEqual('');
    });

    it('should clear message', () => {
        component._content = 'test';
        expect(component._content).toEqual('test');
        component.clearMessage();
        expect(component._content).toEqual("");
    });

    it('should clear reply', () => {
        component._replyContent = 'test';
        component.clearReply();
        expect(component._replyContent).toEqual('');
    });

    it('should fail creating message', () => {
        component.username = 'test';
        component.createMessage();
        expect(component._errorMessage).toEqual('');
    });

});
