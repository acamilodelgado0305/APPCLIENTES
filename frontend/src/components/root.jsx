import { Outlet, Link } from "react-router-dom";

import {
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
  BsFillPersonFill,
  BsFillPersonCheckFill,
} from "react-icons/bs";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>Administrador</h1>
        <nav>
          <ul>
            <li className="sidebar-list-item">
              <Link to="/Dashboard" className="sidebar-link">
                <div className="icon-container">
                  <BsGrid1X2Fill className="icon" />
                  <span style={{ color: "#fff" }}>Dashboard</span>
                </div>
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/Clients" className="sidebar-link">
                 <div className="icon-container">
                  <BsFillPersonCheckFill className="icon" />
                  <span style={{ color: "#fff" }}>Clientes</span>
                </div>
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/Tareas" className="sidebar-link">
                 <div className="icon-container">
                  <BsFillGrid3X3GapFill className="icon" />
                  <span style={{ color: "#fff" }}>Tareas</span>
                </div>
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/Crear">
                <BsPeopleFill className="icon" /> Call-Center
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/Crear">
                <BsListCheck className="icon" /> Finanzas
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="">
                <BsMenuButtonWideFill className="icon" /> Monitoreo
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link href="">
                <BsFillGearFill className="icon" /> Informes
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link href="">
                <BsFillGearFill className="icon" /> Tienda
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link href="">
                <BsFillGearFill className="icon" /> Mi perfil
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
