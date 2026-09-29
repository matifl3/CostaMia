import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { contacto } from '../../data/contacto';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  styleUrl: './app-footer.scss',
  templateUrl: './app-footer.html',
})
export class AppFooter {
  protected readonly contacto = contacto;
}