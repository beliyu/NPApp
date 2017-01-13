import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'pCateg'})
export class CatPipe implements PipeTransform {
   public transform(value: any, par1: string): any {
        return value.filter((n) => {
            return n.cat === par1 || par1.length === 0;
        });
    }
}

@Pipe({ name: 'pYear' })
export class YearPipe implements PipeTransform {
   public transform(value: any, par1: number, par2: number): any {
        return value.filter((n) => {
            return +n.year >= par1 && +n.year <= par2;
        });
    }
}
