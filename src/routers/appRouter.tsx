import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import { Suspense } from "react";
import { LazyBookListPage, LazyNotFoundPage } from "./lazyComponents";
import paths from "./paths/paths";
import AddBookPage from "../pages/AddBookPage/AddBookPage";

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
        path: "/add-book",
        element: <AddBookPage />,
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
