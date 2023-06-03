import { rest } from "msw";
import { apiUrl } from "../hooks/useBooks/useBooks";
import { booksMocks } from "./booksMock";

export const handlers = [
  rest.get(`${apiUrl}/books`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(booksMocks));
  }),
];

export const errorHandlers = [
  rest.get(`${apiUrl}/books`, (_req, res, ctx) => {
    return res(ctx.status(500), ctx.json({ errorMessage: "Can't get books" }));
  }),
];
