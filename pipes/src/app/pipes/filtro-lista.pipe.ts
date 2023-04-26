import { Pipe, PipeTransform } from '@angular/core';
import { Pais } from '../interfaces/pais';

@Pipe({
  name: 'filtroLista'
})
export class FiltroListaPipe implements PipeTransform {

  transform(lista: Pais[], filtro:string): Pais[] {
    return lista
    .filter(p=> p.name.toLocaleUpperCase().includes(filtro.toLocaleUpperCase()))
  
  }

}
