import { Casa, galeriaFotos, video } from './casa';

const descripcion = [
  'Hermosa casa de playa en Santa Clara del Mar, a metros del mar. Con un amplio living comedor, cocina totalmente equipada y cómodos ambientes pensados para que disfrutes tus vacaciones en familia o con amigos.',
  'Cuenta con patio exterior con parrilla, estacionamiento y todos los servicios. La casa está impecablemente presentada y lista para recibirte todo el año.',
  'Consultá por temporada baja, quincenas y estadías largas. No dudes en escribirnos para coordinar una visita o reservar tu estadía.',
];

export const casas: Casa[] = [
  {
    id: 'miami',
    nombre: 'Casa Miami',
    descripcionCorta: 'Amplia casa con mucho aire libre, ideal para familias.',
    descripcion,
    precio: 'Consultar precio',
    lat: -37.829988,
    lng: -57.49774,
    direccion: 'Cerca del mar · Santa Clara del Mar, Buenos Aires',
    portada: 'assets/casas/miami/foto-01.jpeg',
    galeria: [...galeriaFotos('miami', 29), video('miami', 1), video('miami', 2)],
  },
  {
    id: 'mono',
    nombre: 'Casa Mono',
    descripcionCorta: 'Estadía tranquila y confortable a pasos de la playa.',
    descripcion,
    precio: 'Consultar precio',
    lat: -37.829988,
    lng: -57.49774,
    direccion: 'A pasos del mar · Santa Clara del Mar, Buenos Aires',
    portada: 'assets/casas/mono/foto-01.jpeg',
    galeria: galeriaFotos('mono', 16),
  },
  {
    id: 'palma-1',
    nombre: 'Casa Palma 1',
    descripcionCorta: 'Casa luminosa con parrilla y quincho para compartir.',
    descripcion,
    precio: 'Consultar precio',
    lat: -37.828915,
    lng: -57.5015594,
    direccion: 'Zona residencial · Santa Clara del Mar, Buenos Aires',
    portada: 'assets/casas/palma-1/foto-01.jpeg',
    galeria: galeriaFotos('palma-1', 15),
  },
  {
    id: 'palma-2',
    nombre: 'Casa Palma 2',
    descripcionCorta: 'Completa y equipada, perfecta para grupos grandes.',
    descripcion,
    precio: 'Consultar precio',
    lat: -37.828915,
    lng: -57.5015594,
    direccion: 'Zona residencial · Santa Clara del Mar, Buenos Aires',
    portada: 'assets/casas/palma-2/foto-01.jpeg',
    galeria: [...galeriaFotos('palma-2', 70), video('palma-2', 1), video('palma-2', 2)],
  },
  {
    id: 'viejo',
    nombre: 'Casa Viejo',
    descripcionCorta: 'Un clásico con encanto, cerca de todo.',
    descripcion,
    precio: 'Consultar precio',
    lat: -37.829988,
    lng: -57.49774,
    direccion: 'Cerca del centro · Santa Clara del Mar, Buenos Aires',
    portada: 'assets/casas/viejo/foto-01.jpeg',
    galeria: galeriaFotos('viejo', 8),
  },
];

export const casaPorId = (id: string | undefined | null): Casa | undefined =>
  casas.find((c) => c.id === id);