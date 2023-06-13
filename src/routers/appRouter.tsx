import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import { Suspense } from "react";
import {
  LazyAddBookPage,
  LazyBookListPage,
  LazyNotFoundPage,
} from "./lazyComponents";
import paths from "./paths/paths";
import BookDetailPage from "../pages/BookDetailPage/BookDetailPage";

const routes: RouteObject[] = [
  {
    path: paths.app,
    element: <App />,

    children: [
      {
        index: true,
        element: <Navigate to={paths.home} replace />,
      },
      {
        path: paths.home,
        element: (
          <Suspense>
            <LazyBookListPage />
          </Suspense>
        ),
      },
      {
        path: paths.addBook,
        element: (
          <Suspense>
            <LazyAddBookPage />
          </Suspense>
        ),
      },
      {
        path: "/*",
        element: (
          <Suspense>
            <LazyNotFoundPage />
          </Suspense>
        ),
      },
      {
        path: "/detail",
        element: <BookDetailPage />,
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
