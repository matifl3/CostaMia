export const contacto = {
  nombre: 'Costa Mia Propiedades',
  whatsapp: '5492236334299',
  whatsappMostrar: '+54 9 223 633-4299',
  email: 'info@costamiapropiedades.com.ar',
  instagram: 'https://www.instagram.com/costamia.alq.temporario/',
  direccion: 'Santa Clara del Mar, Buenos Aires, Argentina',
  lat: -37.845,
  lng: -57.5237,
};

export const whatsappLink = (mensaje: string): string =>
  `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(mensaje)}`;