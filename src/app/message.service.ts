import { Injectable } from '@angular/core';

/*****
* MessageService: service for providing message for message component. 
******/
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor() { }

  messages: string[] = []

  add(message : string){
    this.messages.push(message)
  }
  clear(){
    this.messages = []
  }
}
