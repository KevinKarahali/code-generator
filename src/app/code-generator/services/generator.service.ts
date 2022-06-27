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
  public numberOfCodes: number = 1
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
    // let codeSet: Set<string> = new Set()
    // while (codeSet.size < charCode.length) {
    //   for (let i = 0; i < numberOfCodes; i++) {
    //     let code: string[] = []
    //     for (let i = 0; i < this.lengthCode; i++) {
    //       const characterCode = charCode[Math.floor(Math.random() * charCode.length)]
    //       code.push(String.fromCharCode(characterCode))
    //     }
    //     codeSet.add(code.join(''))
    //   }
    // }
    // console.log(codeSet)
    // this._codes = Array.from(codeSet)


    let codeSet: Set<string> = new Set()
    let counter = 0
    while (codeSet.size < numberOfCodes) {
      let code = ''
      for (let i = 0; i < this.lengthCode; i++) {
        code += String.fromCharCode(charCode[Math.floor(Math.random() * charCode.length)])
      }
      codeSet.add(code)
      counter++
    }

    //conver the codesSet to an array


    // console.log(codeSet)
    // console.log(counter)
    // this._codes = Array.from(codeSet).splice(0, numberOfCodes)
    // console.log(this.insertTokenEveryN(this._codes, '-', 3, true))

    // console.log(typeof (codeSet))
    // this._codes[0][0].concat('-')
    this._codes = Array.from(codeSet)
    console.log(this._codes)
    // console.log(this._codes[0][0].concat('-'))

    // this._codes = this.insertTokenEveryN(this._codes, '-', 3, true)
    // console.log(this._codes)
  }

  //insert token every n elements

  private insertTokenEveryN(arr: string[], token: string, times: number, fromEnd: boolean) {
    // Clone the received array, so we don't mutate the
    // original one. You can ignore this if you don't mind.

    let a = arr.slice(0);

    // Insert the <token> every <n> elements.

    let idx = fromEnd ? a.length - times : times;

    while ((fromEnd ? idx >= 1 : idx <= a.length)) {
      a.splice(idx, 0, token);
      idx = (fromEnd ? idx - times : idx + times + 1);
    }

    return a;
  }


  // private addCodes(code: string[]): void {
  //   this._codes = [...new Set(code)]
  //   console.log(this._codes)
  //
  //   // [...new Set(arrayCode)]
  // }

  public get codes(): string[] {
    return this._codes;
  }

  public limitNumber() {
    if (this.settings1 == "0") this.limit = Math.pow(10, this.lengthCode)
    if (this.settings1 == "1") this.limit = Math.pow(25, this.lengthCode)
    if (this.settings1 == "2") this.limit = Math.pow(35, this.lengthCode)
    // console.log(this.limit)
  }

}
