
import {Link} from 'react-router-dom';
import { AiOutlineShoppingCart,AiOutlineLogout,AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';
import { useState } from 'react';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handelMenu = () => {
    setMenu((prev) => !prev)
  }

  return (
    <header className='site-header'>
        <div className='container'>
            <div className='is-flex is-between is-align-center'>
                <Link to='/' className="site-logo">Logos</Link>
                <nav className={menu ? 'nav-active' : ''}>
                    <ul className='is-flex is-center is-align-center'>
                        <li>
                          <Link to='/'>Home</Link>
                        </li>
                        <li>
                          <Link to='/productcategory'>Category</Link>
                        </li>
                        <li>
                          <Link to='/about'>About</Link>
                        </li>
                        <li>
                          <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className='is-flex is-end is-align-center col-gap-12'>
                    {/* <Link to='./signin' className='btn btn-secondary btn-sm is-flex is-align-center col-gap-8'>
                      <AiOutlineLogin/>
                      <span>Login</span>
                    </Link>
                    <Link to='signup' className='btn btn-secondary btn-sm is-flex is-align-center col-gap-8'>
                      <AiOutlineLogout />
                      <span>sign up</span>
                    </Link> */}
                    <a href='' className='btn btn-primary btn-sm is-flex is-align-center col-gap-8'>
                      <AiOutlineShoppingCart/>
                      <span>Cart</span>
                      <span>0</span>
                    </a>
                </div>
                <div className='nav-button' onClick={() => handelMenu()}>
                    {!menu ? <AiOutlineMenu/> : <AiOutlineClose/>}
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar