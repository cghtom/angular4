import { Injectable } from '@angular/core';
import { Message } from './message.model';
import { User } from '../user/user.model';
import { Thread } from '../thread/thread.model';

import { Subject, Observable } from 'rxjs';

interface IMessagesOperation extends Function {
  (messages: Message[]): Message[];
}

/**
* Contains 3 data management streams:
* - newMessage: send each msg once
* - message   :  emits array of current messages
* - updates   : performs operations on messages
*
* 2 action streams
* -
* -
*
*/

@Injectable()
export class MessageService {

  newMsg:Subject<Message> = new Subject<Message>(); // emits single msg
  msgs:Observable<Message[]>; //emits array of msgs
  updates:Subject<any> = new Subject<any>(); //receive operations to modify list of messages

  create: Subject<Message> = new Subject<Message>();
  markThreadAsRead: Subject<any> = new Subject<any>();

  constructor(){
    var initialMessages: Message[] = [];

    // 3. updates should modify list of msgs
    this.msgs = this.updates.scan(
      (messages: Message[], operation : IMessagesOperation) => {
        return operation(messages);
      }, initialMessages
    )
    .publishReplay(1)
    .refCount();

    // 2. when create --> send to "updates"
    this.create.map(
      function(message: Message): IMessagesOperation {
        return (messages: Message[]) => {
          return messages.concat(message);
        };
      }
    ).subscribe(this.updates);

    // 1. if i get new msg --> send to create
    this.newMsg.subscribe(this.create);

      // similarly, `markThreadAsRead` takes a Thread and then puts an operation
    // on the `updates` stream to mark the Messages as read
    this.markThreadAsRead
      .map( (thread: Thread) => {
        return (messages: Message[]) => {
          return messages.map( (message: Message) => {
            // note that we're manipulating `message` directly here. Mutability
            // can be confusing and there are lots of reasons why you might want
            // to, say, copy the Message object or some other 'immutable' here
            if (message.thread.id === thread.id) {
              message.isRead = true;
            }
            return message;
          });
        };
      })
      .subscribe(this.updates);
  }

  addMessage(msg:Message):void{
    this.newMsg.next(msg);
  }

  markAsRead(thread:Thread):void{
    this.markThreadAsRead.next(thread);
  }

  msgsForThreadAndUser(thread:Thread, user:User) : Observable<Message>{
    return this.newMsg
      .filter((msg:Message)=>{
        return ((msg.author.id != user.id))
                && (msg.thread.id == thread.id)
      });
  }
}

export const messageServiceInjectables: Array<any> = [
  MessageService
];
