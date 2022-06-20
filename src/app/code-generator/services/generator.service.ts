import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  private _codes: string[] = []

  public get codes(): string[] {
    return this._codes;
  }

  public addCodes(code: string[]): void {
    this._codes = code
    console.log(this._codes)
  }

}
