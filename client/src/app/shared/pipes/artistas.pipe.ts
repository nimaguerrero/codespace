import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'artistas',
})
export class ArtistasPipe implements PipeTransform {
    transform(artistas: string[]): string {
        if (!artistas) return '';
        return artistas.join();
    }
}
