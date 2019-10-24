import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  public result : number = 0;
  @Output() update = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  incrementer() {
    this.update.emit(++this.result);
  }

  decrementer() {
    this.update.emit(--this.result);
  }
}
