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
  public numberOfCodes: number = 34
  public lengthCode: number = 1
  public limit: number = 35
  public selectedOption: string = ''
  public optionNumber = 1

  constructor() {
    this.settings1 = '2'
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
    // let counter2 = 0
    // let counter3 = this.numberOfCodes
    while (codeSet.size < numberOfCodes) {
      let code = ''
      for (let i = 0; i < this.lengthCode; i++) {
        code += String.fromCharCode(charCode[Math.floor(Math.random() * charCode.length)])
      }

      // if (counter3 == numberOfCodes && counter2 == 10) {
      //   counter3++
      // }

      counter++
      // if (counter >= numberOfCodes) {
      //   counter2++
      // }
      if (counter > 10000 + numberOfCodes) {
        console.log("Limit erreicht")
        break
      }

      //count only when

      codeSet.add(code)
    }
    console.log("counter1", counter)
    // console.log("counter2", counter2)
    // console.log("counter3", counter3)

    let codeArray: string[] = []
    codeSet.forEach(code => {
        let codeWithDash = code.substring(0, 1)
        for (let i = 1; i < code.length; i++) {
          if (i % this.optionNumber == 0) codeWithDash += this.selectedOption
          codeWithDash += code.substring(i, i + 1)
        }
        codeArray.push(codeWithDash)
      }
    )
    // console.log(codeArray)
    // console.log(this.optionNumber)
    this._codes = codeArray


  }

  public get codes(): string[] {
    return this._codes;
  }

  public limitNumber() {
    if (this.settings1 == "0") this.limit = Math.pow(10, this.lengthCode)
    if (this.settings1 == "1") this.limit = Math.pow(25, this.lengthCode)
    if (this.settings1 == "2") this.limit = Math.pow(35, this.lengthCode)
    // console.log('service limit', this.limit)
    // console.log(this.lengthCode)
  }

  downloadCsv() {
    const csv = this._codes.join('\n')
    const blob = new Blob([csv], {type: 'text/csv'})
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'codes.csv'
    link.click()
    window.URL.revokeObjectURL(url)
  }
}
