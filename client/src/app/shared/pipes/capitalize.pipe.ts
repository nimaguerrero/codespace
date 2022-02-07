import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
    transform(txt: any): unknown {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
}
