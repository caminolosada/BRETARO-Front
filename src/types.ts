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
  icon: {
    ok: string;
    error: string;
  };
  feedback: {
    ok: string;
    error: string;
  };
  message: {
    okLogOut: string;
    okAdd: string;
    okDeleted: string;
    okEdit: string;
    errorCredentials: string;
    erorAdd: string;
    errorRemove: string;
    errorEdit: string;
  };
  type: {
    ok: string;
    error: string;
  };
}

export interface PathsStructure {
  app: string;
  home: string;
}
