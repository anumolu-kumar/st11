import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActionService } from 'src/app/services/action.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild('straight') straightRef: ElementRef;

  constructor(private action: ActionService) { }

  ngOnInit(): void {
    this.action.clickEvent.subscribe(event => {
      console.log(event.target.tagName)
      if (event.target.tagName == 'svg'){
        this.restyleElement('straight', '-75vh');
      }else{
        this.restyleElement('straight', '-15vh');
      }
      
    })
  }

  restyleElement(className: string, value: string):void {
    const elementList = document.querySelectorAll('.' + className);
    const element = elementList[0] as HTMLElement;
    element.style.marginTop = value;
 }

}
