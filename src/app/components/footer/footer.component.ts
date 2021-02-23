import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {ActionService} from '../../services/action.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {



  @ViewChild('contact') contactRef: ElementRef;
  showMenu: boolean = false;
  constructor(private action: ActionService, private router: Router) {}

  ngOnInit(): void {
    this.receiveClickNotification();
  }

  handleBlogClick(event: any) {
    this.action.handleClick(event);
    this.router.navigate(['/', 'blog']);
  }

  handleMenuClick(event: any): void {
    this.action.handleClick(event);
    this.showMenu = !this.showMenu;
    console.log(this.showMenu);
  }

  handleAboutUsClickEvent(event) {
    this.action.handleClick(event);
  }

  handleContactUsClickEvent(event) {
    this.action.handleClick(event);
  }

  handleProductClickEvent(event) {
    this.action.handleClick(event);
  }

  handleFeaturesClickEvent(event) {
    this.action.handleClick(event);
  }

  handleSpecificationsClickEvent(event) {
    this.action.handleClick(event);
  }

  handleUsabilityClickEvent(event) {
    this.action.handleClick(event);
  }

  handleWarrantyClickEvent(event) {
    this.action.handleClick(event);
    this.router.navigate(['/', 'warranty-support']);
  }

  handleQueryClick(){
    this.router.navigate(['/', 'contact-us']);
  }

  handleFAQClick(){
    this.router.navigate(['/', 'contact-us']);
  }

  receiveClickNotification() {
    this.action.clickEvent.subscribe((event) => {
      if (event.target.outerText === 'Contact us') {
        this.scrollTo('contact');
      } else if (event.target.outerText === 'About us') {
        this.scrollTo('about');
      } else if (event.target.outerText == 'Blog') {
        console.log('go to blog');
      } else if (event.target.outerText == 'Product') {
        this.scrollTo('product');
      } else if (event.target.outerText == 'Features') {
        this.scrollTo('features');
      } else if (event.target.outerText == 'Specifications') {
        this.scrollTo('product');
      } else if (event.target.outerText == 'Usability') {
        this.scrollTo('usability');
      } else if (event.target.outerText == 'Warraty and Support') {
        console.log('go to warranty');
      } else {
        console.log('default');
      }
    });
  }

  scrollTo(className: string): void {
    const elementList = document.querySelectorAll('.' + className);
    const element = elementList[0] as HTMLElement;
    console.log(element);
    element.scrollIntoView({ behavior: 'smooth' });
  }

}
