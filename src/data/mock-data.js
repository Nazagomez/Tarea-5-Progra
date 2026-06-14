export const autores = [
  {
    id: 1,
    nombre: 'Allan Poe',
    ocupacion: 'Escritor',
    nacionalidad: 'USA',
    generos: ['Terror', 'Misterio', 'Poesía'],
    seudonimo: 'Edgar Allan Poe',
    libros: [
      { libro: 'El cuervo y otros poemas', editorial: 'Planeta', anio: 1990, edicion: '3ra' },
      { libro: 'Cuentos completos', editorial: 'Alfaguara', anio: 2001, edicion: '1ra' },
    ],
  },
  {
    id: 2,
    nombre: 'Mark Twain',
    ocupacion: 'Escritor',
    nacionalidad: 'USA',
    generos: ['Humor', 'Sátira', 'Aventuras'],
    seudonimo: 'Mark Twain',
    libros: [
      { libro: 'El principe y el mendigo', editorial: 'Alfaguara', anio: 1995, edicion: '5ta' },
      { libro: 'Tom Sawyer', editorial: 'Penguin Books', anio: 1965, edicion: '2da' },
    ],
  },
  {
    id: 3,
    nombre: 'Lewis Carroll',
    ocupacion: 'Escritor',
    nacionalidad: 'Reino Unido',
    generos: ['Fantasía', 'Infantil', 'Lógica'],
    seudonimo: 'Lewis Carroll',
    libros: [
      { libro: 'Alicia en el país de las maravillas', editorial: 'Anaya', anio: 2010, edicion: '4ta' },
      { libro: 'A través del espejo', editorial: 'Anaya', anio: 2012, edicion: '2da' },
    ],
  },
];

export const libros = [
  {
    id: 1,
    nombre: 'Las aventuras de Tom Sawyer',
    isbn: '12244-5678-45',
    anio: 2004,
    edicion: '5',
    editorialId: 1,
    editorialNombre: 'Ediciones Alfaguara',
    autorIds: [2],
    autores: ['Mark Twain'],
  },
  {
    id: 2,
    nombre: 'El principe y el mendigo',
    isbn: '98765-4321-10',
    anio: 1995,
    edicion: '5',
    editorialId: 1,
    editorialNombre: 'Ediciones Alfaguara',
    autorIds: [2],
    autores: ['Mark Twain'],
  },
  {
    id: 3,
    nombre: 'Alicia en el país de las maravillas',
    isbn: '55555-1111-22',
    anio: 2010,
    edicion: '4',
    editorialId: 2,
    editorialNombre: 'Editorial Anaya',
    autorIds: [3],
    autores: ['Lewis Carroll'],
  },
  {
    id: 4,
    nombre: 'Cuentos completos',
    isbn: '33333-7777-88',
    anio: 2001,
    edicion: '1',
    editorialId: 1,
    editorialNombre: 'Ediciones Alfaguara',
    autorIds: [1],
    autores: ['Allan Poe'],
  },
];

export const editoriales = [
  {
    id: 1,
    nombre: 'Ediciones Alfaguara',
    pais: 'España',
    fundacion: 1964,
    sitioWeb: 'www.alfaguara.com',
    descripcion: 'Editorial líder en literatura en español con catálogo de autores clásicos y contemporáneos.',
    librosPublicados: 12,
  },
  {
    id: 2,
    nombre: 'Editorial Anaya',
    pais: 'España',
    fundacion: 1959,
    sitioWeb: 'www.anaya.es',
    descripcion: 'Especializada en literatura infantil, juvenil y educativa.',
    librosPublicados: 8,
  },
  {
    id: 3,
    nombre: 'Penguin Books',
    pais: 'Reino Unido',
    fundacion: 1935,
    sitioWeb: 'www.penguin.co.uk',
    descripcion: 'Una de las editoriales más reconocidas a nivel internacional.',
    librosPublicados: 5,
  },
];

export const clasificaciones = [
  { id: 1, codigo: 'FIC-001', nombre: 'Ficción', descripcion: 'Obras de narrativa imaginaria' },
  { id: 2, codigo: 'AVT-002', nombre: 'Aventuras', descripcion: 'Relatos de viajes y exploración' },
  { id: 3, codigo: 'CLÁ-003', nombre: 'Clásicos', descripcion: 'Obras literarias de reconocimiento universal' },
  { id: 4, codigo: 'INF-004', nombre: 'Infantil', descripcion: 'Literatura dirigida al público infantil' },
];

export const nacionalidades = [
  { label: 'USA', value: 'USA' },
  { label: 'España', value: 'España' },
  { label: 'Reino Unido', value: 'Reino Unido' },
  { label: 'México', value: 'México' },
];

export const ediciones = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
];
