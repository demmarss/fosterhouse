import React from 'react';

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
                                <a class="navbar-item">
                                    Home
                                </a>
                                <a class="navbar-item">
                                    Facilities
                                </a>
                                <a class="navbar-item">
                                    Staff
                                    <i class="fa fa-user-o" aria-hidden="true"></i>
                                </a>
                                <span class="navbar-item">
                                    <a class="button is-primary is-inverted">
                                        <span>Contact Us</span>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </nav>
            
  );
}
