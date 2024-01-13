import React from "react";
import { Link, Outlet } from "react-router-dom";
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

function Sidebar({ openSidebarToggle, OpenSidebar, navigation }) {
  return (
      <aside
        id="sidebar"
        className={openSidebarToggle ? "sidebar-responsive" : ""}
      >
        <div className="sidebar-title">
          <div className="sidebar-brand">
            <BsFillPersonFill className="icon_header" /> Administrador Principal
          </div>
          <span className="icon close_icon" onClick={OpenSidebar}>
            X
          </span>
        </div>
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <Link to="/Dashboard">
              <BsGrid1X2Fill className="icon" /> Dashboard
            </Link>
          </li>
          <li className="sidebar-list-item">
            <Link to="/Clients">
              <BsFillPersonCheckFill className="icon" /> Clientes
            </Link>
          </li>
          <li className="sidebar-list-item">
            <a href="">
              <BsFillGrid3X3GapFill className="icon" /> Tareas
            </a>
          </li>
          <li className="sidebar-list-item">
            <Link to="">
              <BsPeopleFill className="icon" /> Call-Center
            </Link>
          </li>
          <li className="sidebar-list-item">
            <Link to="">
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
        <div id="detail">
          <Outlet />
        </div>
      </aside>
  );
}

export default Sidebar;
