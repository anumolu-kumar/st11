import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  showQueryForm: string = 'true';
  showFAQs: string = 'false';
  queryForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.contactForm()
  }

  contactForm(){
    this.queryForm = this.fb.group({
      name: ['', Validators.required],
      phone: '',
      email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      city: '',
      query: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit(): void {
    console.log(this.queryForm.value)
  }

  handleBackHome(){
    this.router.navigate(['/', 'home']);
  }

  handleFAQsClick(){
    this.showQueryForm = 'false';
    this.showFAQs = 'true';
  }

  handleQueryClick(){
    this.showFAQs = 'false';
    this.showQueryForm = 'true';
  }


}
