import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-list-code',
  templateUrl: './list-code.component.html',
  styleUrls: ['./list-code.component.css']
})
export class ListCodeComponent {
  @Input()
  public codes: string[] = []


  // return this.generatorService.codes
  constructor() {
  }

}
