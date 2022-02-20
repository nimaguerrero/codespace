import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'noPoint'
})
export class noPointPipe implements PipeTransform {
  transform(value?: string | null): string {
    let newValue = ''
    if (value !== undefined && value !== null) {
      newValue = value.toString().replace(/\./g, '')
      if (newValue.slice(-2) === '00') {
        newValue = newValue.substring(0, newValue.length - 3)
      }
      if (Number(newValue.charAt(2)) === 0) {
        newValue = 'Gratis'
      }
    }
    return newValue
  }
}
