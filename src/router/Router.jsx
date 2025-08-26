import { createBrowserRouter } from "react-router-dom";
import Home from "../screens/home";
import { PAGE_ROUTE } from "./routes";
import AboutUs from "../screens/aboutUs";
import Layout from "../layout/Layout";
import Services from "../screens/services";

export const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: PAGE_ROUTE.HOME,
        element: <Home />,
      },
      {
        path: PAGE_ROUTE.ABOUT_US,
        element: <AboutUs />,
      },
      {
        path: `${PAGE_ROUTE.SERVICES}/:id`,
        element: <Services />,
      },
    ],
  },
]);
