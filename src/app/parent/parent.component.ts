import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  stuff = ['aThing', 'anotherThing'];
  selectedStuff = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(thing: string): void {
    this.selectedStuff = thing;
  }

}
