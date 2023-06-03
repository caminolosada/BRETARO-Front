import { useCallback } from "react";
import axios from "axios";
import { BookStructure } from "../../types";

export const apiUrl = import.meta.env.VITE_API_URL;

const useBooks = () => {
  const getBooks = useCallback(async (): Promise<BookStructure[]> => {
    try {
      const { data: books } = await axios.get<BookStructure[]>(
        `${apiUrl}/books`
      );

      return books;
    } catch (error) {
      throw new Error("Can't get books");
    }
  }, []);

  return { getBooks };
};

export default useBooks;
