import React from 'react';
import {Link} from "react-router-dom";

export default function Header() {


    document.addEventListener('DOMContentLoaded', () => { // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) { // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => { // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);
                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }
});

  return (
    
                <nav class="navbar is-secondary">
                    <div class="container">
                        <div class="navbar-brand">
                            <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div>
                        <div class="navbar-menu" id="navMenu">
                            <div class="navbar-end">
                 
              <p className='button'><Link to="/">Home</Link></p>
            
              <p className='button'><Link to="/facilities">Facilities</Link></p>
            
              <p className='button'><Link to="/staff">Staff</Link></p>
            
              <p className='button'><Link to="/contactUs">Contact Us</Link></p>
            

                            </div>
                        </div>
                    </div>
                </nav>
            
  );
}
