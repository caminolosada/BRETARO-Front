import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import { Suspense } from "react";
import {
  LazyAddBookPage,
  LazyBookDetailPage,
  LazyBookListPage,
  LazyNotFoundPage,
  LazyUpdateBookPage,
} from "./lazyComponents";
import paths from "./paths/paths";

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
        path: paths.detail,
        element: (
          <Suspense>
            <LazyBookDetailPage />
          </Suspense>
        ),
      },
      {
        path: paths.editBook,
        element: (
          <Suspense>
            <LazyUpdateBookPage />
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
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
