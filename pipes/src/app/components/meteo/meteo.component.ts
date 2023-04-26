import { Component, Input } from '@angular/core';
import { Meteo } from 'src/app/interfaces/meteo';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent {
  @Input()
  meteo!: Meteo
}
