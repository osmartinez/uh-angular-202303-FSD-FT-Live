import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celsiusFarenheit'
})
export class CelsiusFarenheitPipe implements PipeTransform {

  transform(value: number): number {
    return value * (9/5) + 32;
  }

}
