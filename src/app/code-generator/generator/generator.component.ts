import {Component} from '@angular/core';
import {GeneratorService} from "../services/generator.service";

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent {

  public number: number = 1;


  constructor(private generatorService: GeneratorService) {
  }

  public generateCode(times: number): void {
    let code: string[] = []
    for (let i = 0; i < times; i++) {
      // let singleCode = Math.random().toString(16).substring(2, 7).toUpperCase();
      let singleCode = Math.random().toString(30).substring(2, 7).toUpperCase();
      code.unshift(singleCode)
    }
    this.generatorService.addCodes(code)
  }

  public getNumber($event: number) {
    this.number = $event
  }
}
