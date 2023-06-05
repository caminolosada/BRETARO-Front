import { lazy } from "react";

export const LazyBookListPage = lazy(
  () => import("../pages/BookListPage/BookListPage")
);
