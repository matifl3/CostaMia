import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CasaCard } from '../../components/casa-card/casa-card';
import { casas } from '../../data/casas';
import { whatsappLink, contacto } from '../../data/contacto';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink, CasaCard],
  styleUrl: './home-page.scss',
  templateUrl: './home-page.html',
})
export class HomePage {
  protected readonly casasDestacadas = casas.slice(0, 3);
  protected readonly whatsapp = whatsappLink(
    'Hola Costa Mia Propiedades, quiero consultar por una casa en Santa Clara del Mar.',
  );
  protected readonly contacto = contacto;
}