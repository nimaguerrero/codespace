import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'generos',
})
export class GenerosPipe implements PipeTransform {
    transform(generos: string[]): string {
        if (!generos) return '';
        return generos.join(', ');
    }
}
