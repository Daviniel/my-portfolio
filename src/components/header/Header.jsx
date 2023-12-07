import React, {useState} from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import './HeaderResponse.css'

export default function Header() {
  const [menuButton, menuList] = useState(false);

  return (
    <>
      <header>
        <nav data-menu="suave">
          <p><a href="">&lsaquo;DvN&rsaquo;</a></p>
          <div onClick={() => menuList(!menuButton)} data-menu="button" aria-controls="menu"></div> 
          <ul className={(menuButton ? 'menu' : '') + ' hideen'} data-menu="list" id="menu">
            <a><Link activeClass="active" to="sobre" spy={true} smooth={true} offset={-200} className='nav-header'><li>Sobre</li></Link></a>
            <a><Link activeClass="active" to="habilidades" spy={true} smooth={true} offset={-50} className='nav-header'><li>Habilidades</li></Link></a>
            <a><Link activeClass="active" to="projetos" spy={true} smooth={true} className='nav-header'><li>Projetos</li></Link></a>
            <a><Link className='nav-header' to="contato" spy={true} smooth={true}><li>Contato</li></Link></a>
          </ul>
        </nav>
      </header>
    </>
  );
}
