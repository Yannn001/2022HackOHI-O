import React, { useEffect, useState } from 'react';


export default function NavBar() {
  const menu = document.querySelector(".nav__menu");

  useEffect(() => {
    const handleScroll = event => {
      //console.log('window.scrollY', window.scrollY);
      document
        .querySelector("nav")
        .classList.toggle("window-scroll", window.scrollY > 0);
    };

    const handleMenuBtn = event => {
      menu.style.display = "block";
      closeBtn.style.display = "inline-block";
      menuBtn.style.display = "none";
    };

    const handleCloseNav = event => {
      menu.style.display = "none";
      closeBtn.style.display = "none";
      menuBtn.style.display = "inline-block";
    };

    if (window.innerWidth < 1024) {
      document.querySelectorAll(".nav__menu li a").forEach((navItem) => {
        navItem.addEventListener("click", handleCloseNav);
      });
    }

    const menuBtn = document.querySelector("#open-menu-btn");
    const menu = document.querySelector(".nav__menu");
    const closeBtn = document.querySelector("#close-menu-btn");
    window.addEventListener('scroll', handleScroll);
    menuBtn.addEventListener("click",handleMenuBtn);
    closeBtn.addEventListener("click", handleCloseNav);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      menuBtn.removeEventListener("click",handleMenuBtn);
      closeBtn.removeEventListener("click", handleCloseNav);

    };
  }, []);

  return (
    <div>
      <nav
      >
        <div class="container nav__container">
          <a href="index.html" class="nav__logo">
            <h3>Welcome!</h3>
          </a>

          <ul class="nav__menu">
            <li><a href="">Home</a></li>
            <li><a href="">Demo</a></li>
            <li><a href="">Future Solution</a></li>
            <li>
              <a href="https://github.com/Yannn001/2022HackOHI-O/tree/main" class="btn btn-primary" 
              // <a href="" class="btn btn-primary" download
              ><i class="uil uil-grin"></i> Github repo
              </a>
            </li>
            <li>

            </li>
          </ul>

          <button id="open-menu-btn"><i class="uil uil-bars"></i></button>
          <button id="close-menu-btn"><i class="uil uil-multiply"></i></button>
        </div>
      </nav>
    </div>
  );
}
