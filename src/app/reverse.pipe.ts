import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(taskId: any, args?: any): any {
    return taskId + 100;
  }

}
