import {Component} from '@angular/core';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent {
  number: number = 0;

  constructor() {
  }


  public generateCode() {
    console.log("the number ist")
    console.log(this.number)
    const a = Math.random().toString(16).substring(2, 8);
    console.log(a)
  }


}
