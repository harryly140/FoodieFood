import { Component, OnDestroy, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';
import { FoodishAPIImageTest } from 'src/app/interfaces/FoodishAPIImageTest';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-harry',
  templateUrl: './harry.component.html',
  styleUrls: ['./harry.component.scss']
})
export class HarryComponent implements OnInit, OnDestroy {
  testImage: FoodishAPIImageTest = {
    image: ''
  };
  private unsubscribe = new Subject<void>();
  
  constructor(private service: TestService) { }
  
  ngOnInit(): void {
    this.service.getOpenSourceImages()
    .subscribe(image => {
      this.testImage = image
    });
  }

  // Unsubscribe to prevent extra memory usage
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
