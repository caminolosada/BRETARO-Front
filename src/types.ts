export interface BookStructure {
  frontPage: string;
  title: string;
  author: string;
  publicationYear: string;
  editorial: string;
  status: boolean;
  rating: number;
  destination: string;
  cosmos: string;
}

export interface BookDataStructure extends BookStructure {
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
    errorMyBook: string;
  };
}

export interface PathsStructure {
  app: string;
  home: string;
  addBook: string;
  detail: string;
  editBook: string;
}
