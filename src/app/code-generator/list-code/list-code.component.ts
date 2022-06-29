import {Component} from '@angular/core';
import {GeneratorService} from "../services/generator.service";

@Component({
  selector: 'app-list-code',
  templateUrl: './list-code.component.html',
  styleUrls: ['./list-code.component.css']
})
export class ListCodeComponent {


  constructor(private generatorService: GeneratorService) {
  }

  public get codes() {
    return this.generatorService.codes
  }
}
