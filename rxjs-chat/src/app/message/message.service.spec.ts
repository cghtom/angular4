import { TestBed, inject } from '@angular/core/testing';

import { Message } from './message.model';
import { User } from '../user/user.model';
import { Thread } from '../thread/thread.model';

import { MessageService } from './message.service';


describe('MessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });
  });

  it('should emit new messages', inject([MessageService], (service: MessageService) => {

    let theLatestMsg;
    service.newMsg.subscribe((theMsg:Message) => {
      theLatestMsg = theMsg;
    });

    let newMsg = new Message({text:"you'll be a women soon"})
    service.addMessage(newMsg);

    expect(theLatestMsg).toBe(newMsg);
  }));

  it('should emit msgs for same thread from other users', inject([MessageService], (service: MessageService) => {

    let theThread = new Thread();
    let theOtherThread = new Thread();
    let theUser = new User("Urge Overkill", "");
    let theOtherUser = new User("Johnny Cash", "");

    let theLatestMsg;
    service.msgsForThreadAndUser(theThread, theUser).subscribe((theMsg:Message) => {
      theLatestMsg = theMsg;
    });

    let msgByTheUser = new Message({thread:theThread, author:theUser});
    service.addMessage(msgByTheUser);
    expect(theLatestMsg).toBeUndefined();

    let msgonTheOtherThread = new Message({thread:theOtherThread, author:theOtherUser});
    service.addMessage(msgonTheOtherThread);
    expect(theLatestMsg).toBeUndefined();

    let msgByTheOtherUser = new Message({thread:theThread, author:theOtherUser});
    service.addMessage(msgByTheOtherUser);
    expect(theLatestMsg).toBe(msgByTheOtherUser);
  }));

  it('just testing some streams ...', inject([MessageService], (service: MessageService) => {

    let theThread = new Thread();
    let theOtherThread = new Thread();
    let theUser = new User("Urge Overkill", "");
    let theOtherUser = new User("Johnny Cash", "");


    service.newMsg.subscribe((theMsg:Message) => {
      console.log("newMsg : ", theMsg);
    });
    service.create.subscribe((any) => {
      console.log("creates : ", any);
    });
    service.markThreadAsRead.subscribe((any) => {
      console.log("markAsRead : ", any);
    });
    service.updates.subscribe((any) => {
      console.log("updates : ", any);
    });
    service.msgs.subscribe((msgs:Message[]) => {
      console.log("msgs : ", msgs);
    });

    let msgByTheUser = new Message({thread:theThread, author:theUser});
    service.addMessage(msgByTheUser);

    let msgonTheOtherThread = new Message({thread:theOtherThread, author:theOtherUser});
    service.addMessage(msgonTheOtherThread);

    service.markAsRead(theThread);
    //
    // let msgByTheOtherUser = new Message({thread:theThread, author:theOtherUser});
    // service.addMessage(msgByTheOtherUser);

  }));
});
