import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Skills from "../Pages/Skills/Skills";
import Portfolio from "../Pages/Portfolio/Portfolio";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path:'/',
          element: <About></About>
        },
        {
          path:'contact',
          element: <Contact></Contact>
        },
        {
          path: 'skills',
          element: <Skills></Skills>
        },
        {
          path: 'portfolio',
          element: <Portfolio></Portfolio>
        }
      ]
    },
  ]);

  export default router;