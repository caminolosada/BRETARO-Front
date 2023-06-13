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
];

export const addedBookMock: BookDataStructure = {
  id: "647fa740ee528da72718451f",
  title: "La uruguaya",
  author: "Pedro Mairal",
  frontPage: "image_la_uruguaya.jpg",
  publicationYear: "2016",
  editorial: "Libros del Asteroide",
  status: true,
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
