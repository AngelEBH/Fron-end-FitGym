import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rutinaBicep'
})
export class RutinaBicepPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
