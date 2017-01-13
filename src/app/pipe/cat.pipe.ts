import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pCateg' })
export class CatPipe implements PipeTransform {
    public transform(value: any, par1: string): any {
        return value.filter((n) => {
            return n.cat === par1 || par1.length === 0;
        });
    }
}
