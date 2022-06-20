import {Component} from '@angular/core';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent {
  number: number = 1;

  constructor() {
  }

  public generateCode(times: number) {
    for (let i = 0; i < times; i++) {
      const a = Math.random().toString(16).substring(2, 7);
      console.log(a.toUpperCase())
    }
  }
}
