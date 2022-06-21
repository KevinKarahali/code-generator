import {Component} from '@angular/core';
import {GeneratorService} from "../services/generator.service";

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent {

  public numberOfCodes: number = 1;

  constructor(private generatorService: GeneratorService) {
  }

  public getNumber($event: number) {
    this.numberOfCodes = $event
  }

  public generateCode(numberOfCodes: number): void {
    this.generatorService.generateCode(numberOfCodes)
  }

  public generateCode2(timeOfCode: number, characterAmount: number, includeUppercase: boolean, includeNumbers: boolean) {
    this.generatorService.generateCode2(timeOfCode, characterAmount, includeUppercase, includeNumbers)
  }

}
