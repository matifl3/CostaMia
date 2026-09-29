import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Casa } from '../../data/casa';

@Component({
  selector: 'casa-card',
  standalone: true,
  imports: [RouterLink],
  styleUrl: './casa-card.scss',
  templateUrl: './casa-card.html',
})
export class CasaCard {
  readonly casa = input.required<Casa>();
}