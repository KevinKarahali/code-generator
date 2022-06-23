import {Component} from '@angular/core';
import {GeneratorService} from "../services/generator.service";

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent {

  public numberOfCodes: number;
  public lengthCode: number = 1;
  disableButton: boolean = false;

  constructor(private generatorService: GeneratorService) {
    this.numberOfCodes = generatorService.numberOfCodes
    // this.lengthCode = generatorService.lengthCode
  }

  public getNumber($event: number) {
    this.numberOfCodes = $event
    if ($event == this.generatorService.limit) {
      console.log("Limit erreicht")
      this.disableButton = true
    } else {
      this.disableButton = false
    }
  }

  getLength($event: number) {
    // this.lengthCode = $event
    this.generatorService.lengthCode = $event
    this.generatorService.limitNumber()
    // console.log(this.generatorService.lengthCode)
  }

  public generateCode(numberOfCodes: number, characterAmount: number) {
    this.generatorService.generateCode(numberOfCodes, characterAmount)
  }


}
