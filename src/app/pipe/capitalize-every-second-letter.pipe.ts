import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeEverySecondLetter'
})
export class CapitalizeEverySecondLetterPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';

    let result = '';
    for (let i = 0; i < value.length; i++) {
      result += (i % 2 === 1) ? value[i].toUpperCase() : value[i].toLowerCase();
    }
    return result;
  }

}
