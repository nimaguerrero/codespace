import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeArr',
})
export class CapitalizeArrPipe implements PipeTransform {
  transform(artistas: string): unknown {
    const arr = artistas.split(',');
    const newArr = arr.map(
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
    return newArr.join();
  }
}
