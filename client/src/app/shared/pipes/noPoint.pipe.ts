import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'noPoint'
})
export class noPointPipe implements PipeTransform {
  transform(value?: string | null): string {
    console.log(value)
    if (value !== undefined && value !== null) {
      return value.toString().replace(/\./g, '')
    } else {
      return ''
    }
  }
}
