import { Component } from '@angular/core';
import { CasaCard } from '../../components/casa-card/casa-card';
import { casas } from '../../data/casas';

@Component({
  selector: 'app-casas-page',
  standalone: true,
  imports: [CasaCard],
  styleUrl: './casas-page.scss',
  templateUrl: './casas-page.html',
})
export class CasasPage {
  protected readonly casas = casas;
}