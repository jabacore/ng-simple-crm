import {Pipe, PipeTransform} from '@angular/core';
import { ReturnStatement } from '@angular/compiler/src/output/output_ast';

@Pipe({name: "capitalize"})
export class capitalizePipe implements PipeTransform{
    transform(value: any) {
        if (value){
            return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        }
        return value;
    }
}