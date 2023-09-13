import { BookDataStructure, BookStructure } from "../types";

export const booksMocks: BookDataStructure[] = [
  {
    id: "647711a81beb7e30d69afdfe",
    title: "El desorden que dejas",
    author: "Carlos Montero",
    frontPage:
      "https://res.cloudinary.com/dg1skxpqt/image/upload/v1685524428/el-desorden_xvuti4.webp",
    publicationYear: "2016",
    editorial: "Espasa",
    status: true,
    rating: 4,
    destination: "keep",
    cosmos:
      "Entre los misterios de un pueblo y la intriga de un instituto, las vidas de dos mujeres se entrelazan en un peligroso juego.",
  },
  {
    id: "647711a81beb7e30d69afdff",
    title: "La ridícula idea de no volver a verte",
    author: "Rosa Montero",
    frontPage:
      "https://res.cloudinary.com/dg1skxpqt/image/upload/v1685524636/9788432239939_nbrsas.webp",
    publicationYear: "2013",
    editorial: "Seix Barral",
    status: true,
    rating: 5,
    destination: "keep",
    cosmos:
      "Morir es una experiencia única y fascinante y también algo muy divertido, aunque no para el muerto, lógicamente.",
  },
  {
    id: "648703abee528da72718456f",
    title: "Os vellos non deben de namorarse",
    author: "Castelao",
    frontPage:
      "https://res.cloudinary.com/dg1skxpqt/image/upload/c_scale,w_150/v1686086557/19375522579_usnvzf.webp",
    publicationYear: "1941",
    editorial: "Galaxia",
    status: true,
    rating: 4,
    destination: "keep",
    cosmos:
      "Unha comedia teatral en tres actos que satiriza as relacións amorosas na terceira idade, coas súas complicacións e enredos.",
  },
  {
    id: "648703abee528da72718457a",
    title: "El infinito en un junco",
    author: "Irene Vallejo",
    frontPage:
      "https://res.cloudinary.com/dg1skxpqt/image/upload/c_scale,w_150/v1686086788/9788466358293_w1z6qo.webp",
    publicationYear: "2019",
    editorial: "Siruela",
    status: true,
    rating: 4,
    destination: "keep",
    cosmos:
      "Una historia fascinante sobre el poder de los libros y la importancia de la escritura a lo largo de la historia de la humanidad.",
  },
  {
    id: "64fb4178460337a4f8c8b6f1",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    frontPage:
      "https://res.cloudinary.com/dg1skxpqt/image/upload/c_scale,w_150/v1686052201/9780241950425-es_pqleih.webp",
    publicationYear: "1951",
    editorial: "Little, Brown and Company",
    status: true,
    rating: 4,
    destination: "get rid",
    cosmos:
      "Don't ever tell anybody anything. If you do, you start missing everybody.",
  },
  {
    id: "64fb4178460337a4f8c8b6f5",
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    frontPage:
      "https://res.cloudinary.com/dg1skxpqt/image/upload/c_scale,w_480/v1686555661/9788497592208_g53hrn.webp",
    publicationYear: "1967",
    editorial: "Editorial Sudamericana",
    status: true,
    rating: 3,
    destination: "keep",
    cosmos:
      "Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo.",
  },
  {
    id: "64fb4178460337a4f8c8b6f3",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    frontPage:
      "https://res.cloudinary.com/dg1skxpqt/image/upload/c_scale,w_150/v1686052015/9781847493699_fx2qbg.webp",
    publicationYear: "1813",
    editorial: "T. Egerton, Whitehall",
    status: true,
    rating: 5,
    destination: "borrowed",
    cosmos:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
  },
  {
    id: "64fb4178460337a4f8c8b6f4",
    title: "La casa de los espíritus",
    author: "Isabel Allende",
    frontPage:
      "https://res.cloudinary.com/dg1skxpqt/image/upload/c_scale,w_150/v1686556190/978846636208_xgqgfh.webp",
    publicationYear: "1982",
    editorial: "Editorial Sudamericana",
    status: true,
    rating: 5,
    destination: "keep",
    cosmos:
      "Barrabás llegó a nosotros por mar, el niño Pedro Tercero García lo trajo de contrabando en una noche serena.",
  },
];

export const addedBookMock: BookDataStructure = {
  id: "647fa740ee528da72718451f",
  title: "La uruguaya",
  author: "Pedro Mairal",
  frontPage: "image_la_uruguaya.jpg",
  publicationYear: "2016",
  editorial: "Libros del Asteroide",
  status: false,
  rating: 4,
  destination: "keep",
  cosmos:
    "Un escritor argentino se embarca en un viaje a Montevideo que lo llevará a cuestionarse su vida, su matrimonio y sus ambiciones literarias.",
};

export const createdBookMock: BookStructure = {
  title: "La uruguaya",
  author: "Pedro Mairal",
  frontPage: "https://imagessl3.casadellibro.com/a/l/t7/93/9788416213993.jpg",
  publicationYear: "2016",
  editorial: "Libros del Asteroide",
  status: true,
  rating: 4,
  destination: "keep",
  cosmos:
    "Un escritor argentino se embarca en un viaje a Montevideo que lo llevará a cuestionarse su vida, su matrimonio y sus ambiciones literarias.",
};

export const errorEditMock: BookDataStructure = {
  id: "errorId",
  title: "La uruguaya",
  author: "Pedro Mairal",
  frontPage: "image_la_uruguaya.jpg",
  publicationYear: "2016",
  editorial: "Libros del Asteroide",
  status: false,
  rating: 4,
  destination: "keep",
  cosmos:
    "Un escritor argentino se embarca en un viaje a Montevideo que lo llevará a cuestionarse su vida, su matrimonio y sus ambiciones literarias.",
};
