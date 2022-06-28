import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GeneratorComponent} from './generator/generator.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ListCodeComponent} from './list-code/list-code.component';
import {CounterComponent} from './counter/counter.component';
import {ConfiguratorComponent} from './configurator/configurator.component';


@NgModule({
  declarations: [
    GeneratorComponent,
    ListCodeComponent,
    CounterComponent,
    ConfiguratorComponent
  ],
  exports: [
    GeneratorComponent,
    ListCodeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CodeGeneratorModule {
}
