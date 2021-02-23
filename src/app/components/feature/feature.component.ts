import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
  showFeatureImage1: string = 'true';
  showFeatureImage2: string = 'false';
  constructor() { }

  ngOnInit(): void {
    this.toggleFeatureImages()
  }


  toggleFeatureImages(){
    setInterval(()=>{                          
      this.showFeatureImage1 = this.showFeatureImage1 == 'true' ? 'false' : 'true'
      this.showFeatureImage2 = this.showFeatureImage2 == 'true' ? 'false' : 'true'
 }, 3000);
  }

}
