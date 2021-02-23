import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  @Output() clickEvent = new EventEmitter<string>();

  constructor() { }

  

handleClick(event: string) {
  this.clickEvent.emit(event);
}
}
