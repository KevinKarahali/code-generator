import {Component} from '@angular/core';
import {GeneratorService} from "../services/generator.service";

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent {
  number: number = 4;

  constructor(private generatorService: GeneratorService) {
  }

  public generateCode(times: number): void {
    let code: string[] = []
    for (let i = 0; i < times; i++) {
      let single = Math.random().toString(16).substring(2, 7).toUpperCase();
      code.unshift(single)
    }
    this.generatorService.addCodes(code)
  }
}
