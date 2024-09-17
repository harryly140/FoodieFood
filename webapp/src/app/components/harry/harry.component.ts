import { Component, OnDestroy, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';
import { FoodishAPIImageTest } from 'src/app/interfaces/FoodishAPIImageTest';

@Component({
  selector: 'app-harry',
  templateUrl: './harry.component.html',
  styleUrls: ['./harry.component.scss']
})
export class HarryComponent implements OnInit, OnDestroy {
  testImage: FoodishAPIImageTest = {
    image: ''
  };
  
  constructor(private service: TestService) { }
  
  ngOnInit(): void {
    this.service.getOpenSourceImages()
    .subscribe(image => {
      this.testImage = image
    });
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
