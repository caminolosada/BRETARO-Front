export interface BookStructure {
  title: string;
  author: string;
  frontPage: string;
  publicationYear: string;
  editorial: string;
  status: boolean;
  rating: number;
  destination: string;
  cosmos: string;
  id: string;
}

export interface modalDataStructure {
  message: {
    okLogOut: string;
    okAdd: string;
    okDeleted: string;
    okEdit: string;
    errorBooks: string;
    errorCredentials: string;
    erorAdd: string;
    errorRemove: string;
    errorEdit: string;
  };
}

export interface PathsStructure {
  app: string;
  home: string;
  addBook: string;
}
