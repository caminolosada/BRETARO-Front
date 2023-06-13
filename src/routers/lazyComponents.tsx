import { lazy } from "react";

export const LazyBookListPage = lazy(
  () => import("../pages/BookListPage/BookListPage")
);

export const LazyNotFoundPage = lazy(
  () => import("../pages/NotFoundPage/NotFoundPage")
);

export const LazyAddBookPage = lazy(
  () => import("../pages/AddBookPage/AddBookPage")
);

export const LazyBookDetailPage = lazy(
  () => import("../pages/BookDetailPage/BookDetailPage")
);
