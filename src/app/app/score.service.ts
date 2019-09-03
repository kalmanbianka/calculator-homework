import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  scoreService: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { } 

  counter = 0;

  onAddIncrease(){
    this.counter ++;
  }

  onAddDecrease(){
    this.counter --;
  }

  onAddReset(){
    this.counter === 0;
  }
}
