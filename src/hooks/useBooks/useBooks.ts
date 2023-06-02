import axios from "axios";
import { BookStructure } from "../../types";

export const apiUrl = import.meta.env.VITE_API_URL;

const useBooks = () => {
  const getBooks = async (): Promise<BookStructure[]> => {
    const {
      data: { books },
    } = await axios.get<{ books: BookStructure[] }>(`${apiUrl}/books`);

    return books;
  };

  return { getBooks };
};

export default useBooks;
