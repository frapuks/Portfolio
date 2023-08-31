import { Route } from "react-router-dom";
import { NoPage, Home } from "../Pages";

const Router = [
  // { id: 1, mainPath: "*", mainElement: <NoPage /> },
  { id: 1, mainPath: "*", mainElement: <Home /> },
  { id: 2, mainPath: "/", mainElement: <Home /> },
];

const mainRoutes = Router.map(({ id, mainPath, mainElement }) => <Route key={id} path={mainPath} element={mainElement} />);

export { Router, mainRoutes };