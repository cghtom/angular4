import { uuid } from '../util/uuid';

import { Message } from '../message/message.model';

export class Thread {

  id:string;
  name:string;
  avatarSrc:string;
  lastMsg: Message;


  constructor(id?:string,name?:string,avatarSrc?:string){
    this.id = id || uuid();
    this.name = name;
    this.avatarSrc = avatarSrc;
  }

}
