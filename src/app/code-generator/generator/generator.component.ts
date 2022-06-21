import {Component} from '@angular/core';
import {GeneratorService} from "../services/generator.service";

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent {

  public numberOfCodes: number = 5;
  public lengthCode: number = 5;

  constructor(private generatorService: GeneratorService) {
  }

  public getNumber($event: number) {
    this.numberOfCodes = $event
  }

  getLength($event: number) {
    this.lengthCode = $event
  }

  public generateCode(timeOfCode: number, characterAmount: number, includeUppercase: boolean, includeNumbers: boolean) {
    this.generatorService.generateCode(timeOfCode, characterAmount, includeUppercase, includeNumbers)
  }

}
