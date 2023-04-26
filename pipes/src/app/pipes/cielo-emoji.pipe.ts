import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cieloEmoji'
})
export class CieloEmojiPipe implements PipeTransform {

  transform(cielo: string): string {
    if(cielo==="soleado"){
      return '☀️'
    }
    else if(cielo === "lluvioso"){
      return '🌧️'
    }
    else{
      return ''
    }
  }

}
