import { useCallback } from "react";
import axios from "axios";
import { BookDataStructure, BookStructure } from "../../types";
import {
  hideLoadingActionCreator,
  showModalActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import modalData from "../../components/Modal/modalData";

export const apiUrl = import.meta.env.VITE_API_URL;

const useBooks = () => {
  const { collection, filter } = useAppSelector((state) => state.books);

  const dispatch = useAppDispatch();
  const getBooks = useCallback(async (): Promise<BookDataStructure[]> => {
    try {
      dispatch(showLoadingActionCreator());

      const { data: books } = await axios.get<BookDataStructure[]>(
        `${apiUrl}/books/?limit=${collection}&status=${filter}`
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
  }, [dispatch, collection, filter]);

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

  const createBook = async (
    bookData: BookStructure
  ): Promise<BookDataStructure | undefined> => {
    try {
      dispatch(showLoadingActionCreator());
      const {
        data: { newBook },
      } = await axios.post<{ newBook: BookDataStructure }>(
        `${apiUrl}/books/add`,
        bookData
      );
      dispatch(hideLoadingActionCreator());

      return newBook;
    } catch {
      dispatch(hideLoadingActionCreator());
      dispatch(
        showModalActionCreator({
          isError: true,
          message: modalData.message.erorAdd,
          isVisible: true,
        })
      );
    }
  };

  const getMyBook = useCallback(
    async (id: string): Promise<BookStructure | undefined> => {
      try {
        dispatch(showLoadingActionCreator());
        const {
          data: { myBook },
        } = await axios.get<{ myBook: BookDataStructure }>(
          `${apiUrl}/books/${id}`
        );

        dispatch(hideLoadingActionCreator());
        return myBook;
      } catch {
        dispatch(hideLoadingActionCreator());
        dispatch(
          showModalActionCreator({
            isError: true,
            isVisible: true,
            message: modalData.message.errorMyBook,
          })
        );
      }
    },
    [dispatch]
  );

  const editBook = async (
    bookData: BookDataStructure
  ): Promise<BookDataStructure | undefined> => {
    try {
      dispatch(showLoadingActionCreator());
      const {
        data: { editedBook },
      } = await axios.put<{ editedBook: BookDataStructure }>(
        `${apiUrl}/books/`,
        bookData
      );
      dispatch(hideLoadingActionCreator());
      dispatch(
        showModalActionCreator({
          isVisible: true,
          isError: false,
          message: modalData.message.okEdit,
        })
      );

      return editedBook;
    } catch {
      dispatch(hideLoadingActionCreator());
      dispatch(
        showModalActionCreator({
          isError: true,
          message: modalData.message.errorEdit,
          isVisible: true,
        })
      );
    }
  };

  return { getBooks, deleteBooks, createBook, getMyBook, editBook };
};

export default useBooks;
