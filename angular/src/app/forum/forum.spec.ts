import {async, TestBed} from '@angular/core/testing';
import {Forum} from './app.forum';

describe('Forum', () => {
    const fixture = TestBed.createComponent(Forum);
    const app = fixture.debugElement.componentInstance;
    it('should get array of messages', async(() => {
        expect(app._messagesArray).toEqual([]);
    }));
    it('Should test messages', () => {
        app._content = 'test';
        app.clearMessage();
        expect(app._content).toEqual('');
    });
});
