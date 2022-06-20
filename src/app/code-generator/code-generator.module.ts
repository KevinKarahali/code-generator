import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GeneratorComponent} from './generator/generator.component';
import {FormsModule} from "@angular/forms";
import {ListCodeComponent} from './list-code/list-code.component';
import { CounterComponent } from './counter/counter.component';


@NgModule({
  declarations: [
    GeneratorComponent,
    ListCodeComponent,
    CounterComponent
  ],
  exports: [
    GeneratorComponent,
    ListCodeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CodeGeneratorModule {
}
