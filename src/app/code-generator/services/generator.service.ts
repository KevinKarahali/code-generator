import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  private _codes: string[] = []

  private readonly UpperCase_Char: number[]
  private readonly LowerCase_Char: number[]
  private readonly Number_Char: number[]

  constructor() {
    this.UpperCase_Char = GeneratorService.iterateArray(65, 90)
    this.LowerCase_Char = GeneratorService.iterateArray(97, 122)
    this.Number_Char = GeneratorService.iterateArray(48, 57)
  }

  private static iterateArray(lowValue: number, highValue: number) {
    const array = []
    for (let i = lowValue; i < highValue; i++) {
      array.push(i)
    }
    return array
  }


  private addCodes(code: string[]): void {
    this._codes = code
    console.log(this._codes)
  }

  public generateCode2(numberOfCodes: number, characterAmount: number, includeUppercase: boolean, includeNumbers: boolean) {
    let charCode = this.LowerCase_Char
    if (includeUppercase) charCode = charCode.concat(this.UpperCase_Char)
    if (includeNumbers) charCode = charCode.concat(this.Number_Char)

    let arrayCode: string[] = []
    for (let i = 0; i < numberOfCodes; i++) {
      let code: string[] = []
      for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCode[Math.floor(Math.random() * charCode.length)]
        code.push(String.fromCharCode(characterCode))
      }
      arrayCode.push(code.join(''))
    }
    this.addCodes(arrayCode)
  }

  public generateCode(numberOfCodes: number) {
    let code: string[] = []
    for (let i = 0; i < numberOfCodes; i++) {
      // let singleCode = Math.random().toString(16).substring(2, 7).toUpperCase();
      let singleCode = Math.random().toString(36).substring(2, 7).toUpperCase();
      code.unshift(singleCode)
    }
    this.addCodes(code)
  }

  public get codes(): string[] {
    return this._codes;
  }
}
