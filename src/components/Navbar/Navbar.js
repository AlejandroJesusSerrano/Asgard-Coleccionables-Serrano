import React from 'react'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg background'>
        <div className='container-fluid'>
          <a className='navbar-brand px-0 py-0 mx-0 my-0' href='/'>
            <img src='./AsgardNav.svg' className='px-0 py-0 mx-0 my-0' alt='Logotipo Asgard Coleccionables' width='150'/>
          </a>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'/>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='spBtn navbar-nav ms-5'> 
              <li className='nav-item spBtn init'>
                <a className='nav-link special' aria-current='page' href='/'>Home</a>
              </li>
            </ul>
            <ul className='navbar-nav mx-auto'>
              <li className='nav-item'>
                <a className='nav-link med' href='/Dc'>DC</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link med' href='/Marvel'>Marvel</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link med' href='/Anime'>Manga & Anime</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link med' href='/Harry'>Universo Harry Potter</a>
              </li>
            </ul>
            <ul className='spBtn navbar-nav me-5'>
              <li className='nav-item'>
                <a className='nav-link special' href='/Login'>Log In</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
