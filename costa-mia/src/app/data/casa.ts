export type CasaMedia = {
  src: string;
  type: 'foto' | 'video';
};

export type Casa = {
  id: string;
  nombre: string;
  descripcionCorta: string;
  descripcion: string[];
  precio: string;
  lat: number;
  lng: number;
  direccion: string;
  portada: string;
  galeria: CasaMedia[];
};

const foto = (slug: string, numero: number): CasaMedia => ({
  src: `assets/casas/${slug}/foto-${String(numero).padStart(2, '0')}.jpeg`,
  type: 'foto',
});

export const video = (slug: string, numero: number): CasaMedia => ({
  src: `assets/casas/${slug}/video-${String(numero).padStart(2, '0')}.mp4`,
  type: 'video',
});

export const galeriaFotos = (slug: string, cantidad: number): CasaMedia[] =>
  Array.from({ length: cantidad }, (_, i) => foto(slug, i + 1));