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
        expect(component._errorMessage).toEqual('');
        expect(component._replyContent).toEqual('');
        expect(component.upVotes).toEqual([]);
        expect(component.downVotes).toEqual([]);
        component.showContentIfLoggedIn();
        expect(component.message).toEqual('Not logged in.');
        expect(component.token).toEqual('');
    });

    it('should clear message', () => {
        component._content = 'test';
        expect(component._content).toEqual('test');
        component.clearMessage();
        expect(component._content).toEqual("");
        component.username = 'hi';
        component.checkLogin();
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

    it('should test delete', () => {
        component.delete('');
        expect(1).toEqual(1);
        component.resetCurrentThread();
        expect(component._errorMessage).toEqual('no current thread selected.');
        component.currentThread = '1';
        component.resetCurrentThread();
        component.updateMessageVotes('fff', 'fff');
    });

});
