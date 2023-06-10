import { rest } from "msw";
import { apiUrl } from "../hooks/useBooks/useBooks";
import { addedBookMock, booksMocks } from "./booksMock";
import modalData from "../components/Modal/modalData";

export const handlers = [
  rest.get(`${apiUrl}/books`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(booksMocks));
  }),

  rest.delete(`${apiUrl}/books/delete/:id`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ message: modalData.message.okDeleted })
    );
  }),

  rest.post(`${apiUrl}/books/add`, (_req, res, ctx) => {
    return res(ctx.status(201), ctx.json({ newBook: addedBookMock }));
  }),
];

export const errorHandlers = [
  rest.get(`${apiUrl}/books`, (_req, res, ctx) => {
    return res(ctx.status(500), ctx.json({ errorMessage: "Can't get books" }));
  }),

  rest.delete(`${apiUrl}/books/delete/:id`, (_req, res, ctx) => {
    return res(
      ctx.status(404),
      ctx.json({ mesage: modalData.message.errorRemove })
    );
  }),

  rest.post(`${apiUrl}/books/add`, (_req, res, ctx) => {
    return res(
      ctx.status(400),
      ctx.json({ message: modalData.message.erorAdd })
    );
  }),
];
