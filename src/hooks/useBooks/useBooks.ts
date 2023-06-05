import { useCallback } from "react";
import axios from "axios";
import { BookStructure } from "../../types";
import {
  hideLoadingActionCreator,
  showErrorActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";
import { useAppDispatch } from "../../store";

export const apiUrl = import.meta.env.VITE_API_URL;

const useBooks = () => {
  const dispatch = useAppDispatch();
  const getBooks = useCallback(async (): Promise<BookStructure[]> => {
    try {
      dispatch(showLoadingActionCreator());

      const { data: books } = await axios.get<BookStructure[]>(
        `${apiUrl}/books`
      );

      dispatch(hideLoadingActionCreator());
      return books;
    } catch (error) {
      dispatch(hideLoadingActionCreator());
      dispatch(showErrorActionCreator({ isError: true }));
      throw new Error("Can't get books");
    }
  }, [dispatch]);

  return { getBooks };
};

export default useBooks;
