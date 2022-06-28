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
  public numberOfCodes: number = 8
  public lengthCode: number = 1
  public limit: number = 10
  public selectedOption: string = ''
  public optionNumber = 0

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

    let codeSet: Set<string> = new Set()
    let counter = 0
    while (codeSet.size < numberOfCodes) {
      let code = ''
      for (let i = 0; i < this.lengthCode; i++) {
        code += String.fromCharCode(charCode[Math.floor(Math.random() * charCode.length)])
      }
      counter++
      if (counter > 10000) {
        console.log("Limit erreicht")
        break
      }
      codeSet.add(code)
    }

    //add "-" to the beginning of the code
    let codeArray: string[] = []
    codeSet.forEach(code => {
        //insert "-" every 4th character except the first one
        let codeWithDash = code.substring(0, 1)
        for (let i = 1; i < code.length; i++) {
          if (i % this.optionNumber == 0) codeWithDash += this.selectedOption
          codeWithDash += code.substring(i, i + 1)
        }
        codeArray.push(codeWithDash)
      }
    )
    console.log(codeArray)
    console.log(this.optionNumber)
    this._codes = codeArray


  }

  public get codes(): string[] {
    return this._codes;
  }

  public limitNumber() {
    if (this.settings1 == "0") this.limit = Math.pow(10, this.lengthCode)
    if (this.settings1 == "1") this.limit = Math.pow(25, this.lengthCode)
    if (this.settings1 == "2") this.limit = Math.pow(35, this.lengthCode)
    console.log(this.limit)
    console.log(this.lengthCode)
  }

}
