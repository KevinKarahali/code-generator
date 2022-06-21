import {Component} from '@angular/core';
import {GeneratorService} from "../services/generator.service";

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent {

  public numberOfCodes: number = 50;
  public lengthCode: number = 1;

  constructor(private generatorService: GeneratorService) {
  }

  public getNumber($event: number) {
    this.numberOfCodes = $event
  }

  getLength($event: number) {
    this.lengthCode = $event
  }

  public generateCode(numberOfCodes: number, characterAmount: number) {
    this.generatorService.generateCode(numberOfCodes, characterAmount)
  }

}
