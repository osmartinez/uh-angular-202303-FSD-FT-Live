import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroListaPipe } from './pipes/filtro-lista.pipe';
import { CelsiusFarenheitPipe } from './pipes/celsius-farenheit.pipe';
import { CieloEmojiPipe } from './pipes/cielo-emoji.pipe';



@NgModule({
  declarations: [
    FiltroListaPipe,
    CelsiusFarenheitPipe,
    CieloEmojiPipe
  ],
  imports: [
    
  ],
  exports:[FiltroListaPipe,CelsiusFarenheitPipe,CieloEmojiPipe]
})
export class AppPipesModule { }
