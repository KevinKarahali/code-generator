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
  public numberOfCodes: number = 0
  public lengthCode: number = 10
  public limit: number = 3

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

  public generateCode(numberOfCodes: number) {
    // let charCode = this.LowerCase_Char
    let charCode = this.Number_Char
    if (this.settings1 == "0") charCode = this.Number_Char
    if (this.settings1 == "1") charCode = this.LowerCase_Char.concat(this.UpperCase_Char)
    if (this.settings1 == "2") charCode = this.Number_Char.concat(this.UpperCase_Char).concat(this.LowerCase_Char)


    if (this.settings1 == "1" && this.settings2 == "0") charCode = this.UpperCase_Char
    if (this.settings1 == "1" && this.settings2 == "1") charCode = this.LowerCase_Char
    if (this.settings1 == "1" && this.settings2 == "2") charCode = this.LowerCase_Char.concat(this.UpperCase_Char)

    if (this.settings1 == "2" && this.settings2 == "0") charCode = this.Number_Char.concat(this.UpperCase_Char)
    if (this.settings1 == "2" && this.settings2 == "1") charCode = this.Number_Char.concat(this.LowerCase_Char)
    if (this.settings1 == "2" && this.settings2 == "2") charCode = this.Number_Char.concat(this.LowerCase_Char).concat(this.UpperCase_Char)


    // let codeSet: Set<string> = new Set()
    // let arrayCode: string[] = []
    // for (let i = 0; i < numberOfCodes; i++) {
    //   let code: string[] = []
    //   for (let i = 0; i < characterAmount; i++) {
    //     const characterCode = charCode[Math.floor(Math.random() * charCode.length)]
    //     code.push(String.fromCharCode(characterCode))
    //     console.log(code)
    //   }
    //   arrayCode.push(code.join(''))
    //   codeSet.add(code.join(''))
    //   console.log(codeSet.size)
    // }
    // this.addCodes(arrayCode)
    // console.log(codeSet)

    //for each number of codes generate a array of charCodes and join them togheter
    let arrayCode: string[] = []
    for (let i = 0; i < numberOfCodes; i++) {
      let code: string[] = []
      for (let i = 0; i < this.lengthCode; i++) {
        const characterCode = charCode[Math.floor(Math.random() * charCode.length)]
        code.push(String.fromCharCode(characterCode))
      }
      arrayCode.push(code.join(''))
    }
    this.addCodes(arrayCode)
  }

  private addCodes(code: string[]): void {
    this._codes = [...new Set(code)]
    console.log(this._codes)

    // [...new Set(arrayCode)]
  }

  public get codes(): string[] {
    return this._codes;
  }

  public limitNumber() {
    if (this.settings1 == "0") this.limit = Math.pow(10, this.lengthCode)
    if (this.settings1 == "1") this.limit = Math.pow(25, this.lengthCode)
    if (this.settings1 == "2") this.limit = Math.pow(35, this.lengthCode)
    console.log(this.limit)
  }

}
