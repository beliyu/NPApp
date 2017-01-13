import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pYear' })
export class YearPipe implements PipeTransform {
    public transform(value: any, par1: number, par2: number): any {
        return value.filter((n) => {
            return +n.year >= par1 && +n.year <= par2;
        });
    }
}
