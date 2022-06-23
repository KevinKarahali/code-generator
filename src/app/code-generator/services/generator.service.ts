import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  private _codes: string[] = []
  private readonly UpperCase_Char: number[]
  private readonly LowerCase_Char: number[]
  private readonly Number_Char: number[]
  public settings1: string = ''
  public settings2: string = ''
  public numberOfCodes: number = 10
  public lengthCode: number = 1
  public limit: number = 30

  constructor() {
    this.UpperCase_Char = GeneratorService.iterateArray(65, 91)
    this.LowerCase_Char = GeneratorService.iterateArray(97, 123)
    this.Number_Char = GeneratorService.iterateArray(48, 58)
  }

  private static iterateArray(lowValue: number, highValue: number) {
    const array = []
    for (let i = lowValue; i < highValue; i++) {
      array.push(i)
    }
    return array
  }

  public generateCode(numberOfCodes: number, characterAmount: number) {
    let charCode = this.LowerCase_Char
    if (this.settings1 == "0") charCode = this.Number_Char
    if (this.settings1 == "1") charCode = this.LowerCase_Char.concat(this.UpperCase_Char)
    if (this.settings1 == "2") charCode = this.Number_Char.concat(this.UpperCase_Char).concat(this.LowerCase_Char)


    if (this.settings1 == "1" && this.settings2 == "0") charCode = this.UpperCase_Char
    if (this.settings1 == "1" && this.settings2 == "1") charCode = this.LowerCase_Char
    if (this.settings1 == "1" && this.settings2 == "2") charCode = this.LowerCase_Char.concat(this.UpperCase_Char)

    if (this.settings1 == "2" && this.settings2 == "0") charCode = this.Number_Char.concat(this.UpperCase_Char)
    if (this.settings1 == "2" && this.settings2 == "1") charCode = this.Number_Char.concat(this.LowerCase_Char)
    if (this.settings1 == "2" && this.settings2 == "2") charCode = this.Number_Char.concat(this.LowerCase_Char).concat(this.UpperCase_Char)


    let codeSet: Set<string> = new Set()
    let arrayCode: string[] = []
    for (let i = 0; i < numberOfCodes; i++) {
      let code: string[] = []
      for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCode[Math.floor(Math.random() * charCode.length)]
        code.push(String.fromCharCode(characterCode))
        console.log(code)
      }
      arrayCode.push(code.join(''))
      codeSet.add(code.join(''))
      console.log(codeSet.size)
    }
    this.addCodes(arrayCode)
    console.log(codeSet)
  }

  private addCodes(code: string[]): void {
    this._codes = [...new Set(code)]
    console.log(this._codes)

    // [...new Set(arrayCode)]
  }

  public get codes(): string[] {
    return this._codes;
  }
}
