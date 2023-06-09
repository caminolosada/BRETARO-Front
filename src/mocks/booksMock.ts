import { BookDataStructure } from "../types";

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
