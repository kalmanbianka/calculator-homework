import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  scoreService: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { } 

  counter = 0;

  addIncrease(){
    this.counter ++;
  }

  addDecrease(){
    this.counter --;
  }

  addReset(){
    this.counter === 0;
  }
}
