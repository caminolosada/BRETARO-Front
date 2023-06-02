import { rest } from "msw";
import { apiUrl } from "../hooks/useBooks/useBooks";
import { booksMocks } from "./booksMock";

export const handlers = [
  rest.get(`${apiUrl}/books`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(booksMocks));
  }),
];
