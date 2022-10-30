/*!
* Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 
const list = [{title:"Acer", id: 0, weight: 0.9, count: 36978}, {title:"Prunus", id: 1, weight: 0.83, count: 28668}, {title:"Malus", id: 2, weight: 0.29, count: 8718}, {title:"Crataegus", id: 3, weight: 0.25, count: 7083}, {title:"Quercus",id: 4, weight: 0.24, count: 7061}, {title:"Cornus",id: 5, weight: 0.22, count: 6222}, {title:"Pyrus",id: 6, weight: 0.19, count: 5517}];
document.getElementById("button").onclick = function() {onclick()};
weight = function(arr) {
    return [].concat(...arr.map((obj) => Array(Math.ceil(obj.weight * 100)).fill(obj))); 
}
pick = function(arr) {
    let weighted = weight(arr);
    return weighted[Math.floor(Math.random() * weighted.length)]
}

function onclick() {
    document.getElementById("demo").innerHTML = pick(list).title;
}

function move() {
    var elem = document.getElementById("myBar");   
    var width = 20;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  }

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});