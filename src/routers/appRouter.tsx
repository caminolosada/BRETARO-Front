import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import Loader from "../components/Loader/Loader";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/loader",
    element: <Loader />,
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
