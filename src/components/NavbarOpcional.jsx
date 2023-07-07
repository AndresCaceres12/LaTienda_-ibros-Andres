import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Text } from "@nextui-org/react";

import "./Navbar.css";

const NavbarOpcional = () => {
  return (
    <div>
      <Navbar style={{position:"fixed"}} variant="sticky" className="ContieneNavbar">
        <Navbar.Brand className="LogoNombre" >
          
          <img
            src="https://cdn-icons-png.flaticon.com/128/3145/3145765.png"
            alt="Logo de libros"
            width="32"
          />
          <Text h2 size={30} weight="bold">
            Libros Con Andres
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link>
            {" "}
            <Link  id="Inicio" to="/">
              Volver para comprar 
            </Link>
          </Navbar.Link>
         
          
         
        </Navbar.Content>
      </Navbar>
    </div>
  );
};

export default NavbarOpcional;
