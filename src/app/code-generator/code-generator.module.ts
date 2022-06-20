import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GeneratorComponent} from './generator/generator.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    GeneratorComponent
  ],
  exports: [
    GeneratorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CodeGeneratorModule {
}
