import { Component, computed, inject, input, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { Casa } from '../../data/casa';
import { casaPorId } from '../../data/casas';
import { whatsappLink } from '../../data/contacto';

@Component({
  selector: 'app-casa-detail-page',
  standalone: true,
  imports: [RouterLink],
  styleUrl: './casa-detail-page.scss',
  templateUrl: './casa-detail-page.html',
})
export class CasaDetailPage {
  readonly id = input.required<string>();

  private readonly sanitizer = inject(DomSanitizer);

  protected readonly casa = computed<Casa | undefined>(() => casaPorId(this.id()));
  protected readonly indice = signal(0);
  protected readonly actual = computed(
    () => this.casa()?.galeria[this.indice()] ?? null,
  );
  protected readonly whatsapp = computed(() =>
    whatsappLink(
      `Hola, me interesa la ${this.casa()?.nombre ?? 'casa'} de Santa Clara del Mar. ¿Está disponible?`,
    ),
  );
  protected readonly mapaUrl = computed<SafeResourceUrl | null>(() => {
    const c = this.casa();
    if (!c) return null;
    const q = `${c.lat},${c.lng}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://maps.google.com/maps?q=${q}&z=15&output=embed`,
    );
  });

  anterior(): void {
    const galeria = this.casa()?.galeria ?? [];
    if (galeria.length === 0) return;
    this.indice.set((this.indice() - 1 + galeria.length) % galeria.length);
  }

  siguiente(): void {
    const galeria = this.casa()?.galeria ?? [];
    if (galeria.length === 0) return;
    this.indice.set((this.indice() + 1) % galeria.length);
  }

  elegirMedia(i: number): void {
    this.indice.set(i);
  }
}