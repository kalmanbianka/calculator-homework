import { Component, OnInit, ViewChild } from '@angular/core';
import { ScoreService } from 'src/app/app/score.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  scoreItem: number = 0;
  constructor(private scoreService: ScoreService) { }

  ngOnInit() {
  this.scoreService.subscribe((x=>){
  this.scoreItem = x;
  })
  }
onIncrease(){
  const value = this.scoreItem.addIncrease(x: number);
}
onDecrease(){

}
onReset(){
  
}
}
