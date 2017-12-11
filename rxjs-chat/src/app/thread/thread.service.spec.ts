import { TestBed, inject } from '@angular/core/testing';

import { Message } from './../message/message.model';
import { Thread } from './thread.model';
import { User } from './../user/user.model';

import { ThreadService } from './thread.service';
import { MessageService } from './../message/message.service';
import * as _ from 'lodash';

describe('ThreadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThreadService, MessageService]
    });
  });

  it('should collect all threads from msgs', ()=>{
    const nate: User = new User('Nate Murray', '');
    const felipe: User = new User('Felipe Coury', '');

    const t1: Thread = new Thread('t1', 'Thread 1', '');
    const t2: Thread = new Thread('t2', 'Thread 2', '');

    const m1: Message = new Message({
      author: nate,
      text: 'Hi!',
      thread: t1
    });
    const m2: Message = new Message({
      author: felipe,
      text: 'Where did you get that!',
      thread: t1
    });
    const m3: Message = new Message({
      author: nate,
      text: 'Did you bring the briefcase!',
      thread: t2
    });

    // why not use injection in it clause???
    const messageService: MessageService = new MessageService();
    const threadService: ThreadService = new ThreadService(messageService);

    threadService.threads.subscribe((threadIdx : {[key:string] : Thread}) =>{
      const threads:Thread[] = _.values(threadIdx);
      const threadNames: string = _.map(threads, (t:Thread)=>{
        return t.name;
      }).join(', ');
      console.log(`threadNames : ${threadNames}`);
    });

    messageService.addMessage(m1);
    messageService.addMessage(m2);
    messageService.addMessage(m3);
  });

  it('Some learning tests on key value pairs in typescript', () => {
    const strings : {[key:string] : number} = {};
    strings["bla"] = 1;
    strings["bla"] = strings["bla"] || 2; // should not be inserted...
    strings["xyz"] = strings["xyz"] || 3;

    expect(Object.keys(strings).length).toBe(2);
    expect(strings["bla"]).toBe(1);
    expect(strings["xyz"]).toBe(3);
  });
});
