import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Pipe({
    name: 'sanitizeStyle',
})
export class SanitizeStylePipe implements PipeTransform {
    constructor(private _sanitizer: DomSanitizer) {}

    transform(v: string): SafeStyle {
        return this._sanitizer.bypassSecurityTrustStyle(v);
    }
}
