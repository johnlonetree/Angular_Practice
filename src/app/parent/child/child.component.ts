import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() data: string[];

  @Output() exampleEvent = new EventEmitter<string>();

  myText: string;

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    this.exampleEvent.emit(this.myText);
  };

}
