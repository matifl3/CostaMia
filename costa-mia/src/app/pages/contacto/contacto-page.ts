import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { contacto, whatsappLink } from '../../data/contacto';

@Component({
  selector: 'app-contacto-page',
  standalone: true,
  styleUrl: './contacto-page.scss',
  templateUrl: './contacto-page.html',
})
export class ContactoPage {
  private readonly sanitizer = inject(DomSanitizer);

  protected readonly contacto = contacto;
  protected readonly whatsapp = whatsappLink(
    'Hola Costa Mia Propiedades, quiero hacer una consulta.',
  );
  protected readonly mapaUrl: SafeResourceUrl =
    this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://maps.google.com/maps?q=${contacto.lat},${contacto.lng}&z=14&output=embed`,
    );
}