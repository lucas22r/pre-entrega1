
import "./NavBar.css";
import CartWidget from "../CartWidget/cartWidget";

export const NavBar = () => {
  return (
    <nav className='NavBar'>
        <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Eventos</a>
            </li>
            <li>
              <a href="#">Merchandising</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
           <li>
            <CartWidget/>
            </li> 
        </ul>
    </nav>
  );
};
