import {Component} from '@angular/core';
import {GeneratorService} from "../services/generator.service";

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.css']
})
export class ConfiguratorComponent {

  public config1: string[] = ["Nur Zahlen", "Nur Buchstaben", "Zahlen und Buchstaben"]
  public config2: string[] = ["Nur Großbuchstaben", "Nur Kleinbuchstaben", "Groß und KleinBuchstaben"]
  public settings1: string = ''
  public settings2: string = ''

  constructor(private generatorService: GeneratorService) {
  }


  config1ChangeHandler($event: any) {
    this.settings1 = $event.target.value
    this.generatorService.settings1 = $event.target.value
  }

  config2ChangeHandler($event: any) {
    this.settings2 = $event.target.value
    this.generatorService.settings2 = $event.target.value
  }
}
