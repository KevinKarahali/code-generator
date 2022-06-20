import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  private _codes: string[] = []

  public get codes(): string[] {
    return this._codes;
  }

  private addCodes(code: string[]): void {
    this._codes = code
    console.log(this._codes)
  }

  public generateCode(numberOfCodes: number) {
    let code: string[] = []
    for (let i = 0; i < numberOfCodes; i++) {
      // let singleCode = Math.random().toString(16).substring(2, 7).toUpperCase();
      let singleCode = Math.random().toString(20).substring(2, 7).toUpperCase();
      code.unshift(singleCode)
    }
    this.addCodes(code)
  }

}
