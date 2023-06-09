import { useCallback } from "react";
import axios from "axios";
import { BookDataStructure } from "../../types";
import {
  hideLoadingActionCreator,
  showModalActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";
import { useAppDispatch } from "../../store";
import modalData from "../../components/Modal/modalData";

export const apiUrl = import.meta.env.VITE_API_URL;

const useBooks = () => {
  const dispatch = useAppDispatch();
  const getBooks = useCallback(async (): Promise<BookDataStructure[]> => {
    try {
      dispatch(showLoadingActionCreator());

      const { data: books } = await axios.get<BookDataStructure[]>(
        `${apiUrl}/books`
      );

      dispatch(hideLoadingActionCreator());
      return books;
    } catch {
      dispatch(hideLoadingActionCreator());
      dispatch(
        showModalActionCreator({
          isError: true,
          message: modalData.message.errorBooks,
          isVisible: true,
        })
      );
      throw new Error("Can't get books");
    }
  }, [dispatch]);

  const deleteBooks = async (id: string): Promise<void> => {
    try {
      dispatch(showLoadingActionCreator());

      await axios.delete<void>(`${apiUrl}/books/delete/${id}`);

      dispatch(hideLoadingActionCreator());

      dispatch(
        showModalActionCreator({
          isError: false,
          isVisible: true,
          message: modalData.message.okDeleted,
        })
      );
    } catch {
      dispatch(
        showModalActionCreator({
          isError: true,
          isVisible: true,
          message: modalData.message.errorRemove,
        })
      );
    }
  };

  return { getBooks, deleteBooks };
};

export default useBooks;
