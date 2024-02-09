import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Skills from "../Pages/Skills/Skills";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Pesronal from "../Components/Personal/Pesronal";
import Education from "../Components/Education/Education";
import Career from "../Components/Career/Career";
import FrontEnd from "../Components/FrontEnd/FrontEnd";
import Backend from "../Components/Backend/Backend";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path:'/',
          element: <About></About>,
          children:[
            {
              path:'/',
              element: <Pesronal></Pesronal>
            },
            {
              path: '/education',
              element: <Education></Education>
            },
            {
              path: '/career',
              element: <Career></Career>
            }
          ]
        },
        {
          path:'contact',
          element: <Contact></Contact>
        },
        {
          path: 'skills',
          element: <Skills></Skills>,
          children: [
            {
              path:'frontend',
              element: <FrontEnd></FrontEnd>
            },
            {
              path:'backend',
              element: <Backend></Backend>
            },
          ]
        },
        {
          path: 'portfolio',
          element: <Portfolio></Portfolio>
        }
      ]
    },
  ]);

  export default router;