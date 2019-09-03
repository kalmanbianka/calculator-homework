import { Component, OnInit, ViewChild } from '@angular/core';
import { ScoreService } from 'src/app/app/services/score.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  constructor(private scoreComponent: ScoreComponent) { }

  ngOnInit() {
  }

}
