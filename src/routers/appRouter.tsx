import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import { Suspense } from "react";
import { LazyBookListPage, LazyNotFoundPage } from "./lazyComponents";
import paths from "./paths/paths";

const routes: RouteObject[] = [
  {
    path: paths.app,
    element: <App />,
    errorElement: (
      <Suspense>
        <LazyNotFoundPage />
      </Suspense>
    ),
    children: [
      {
        path: paths.home,
        element: (
          <Suspense>
            <LazyBookListPage />
          </Suspense>
        ),
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
