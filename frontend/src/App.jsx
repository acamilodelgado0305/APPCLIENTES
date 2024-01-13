import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./components/Home.jsx";
import Slidebar from "./components/Slidebar.jsx";
import Clients from "./components/Clientes.jsx";
import ErrorPage from "./error-page.jsx";
import Root from "./components/root.jsx";
import Tareas from "./components/Tareas.jsx";
import EditContact from "./components/CreateClient.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children:[{
      index:true,element:<Home/>
    },
    {
      path:"/Dashboard",
      element :<Home/>

    },
    {
      path:"/Clients",
      element:<Clients/>
    },
    {
      path:"/Tareas",
      element:<Tareas/>
    },
    {
      path:"/Crear",
      element:<EditContact/>  

    }

  ]
    
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
export default App