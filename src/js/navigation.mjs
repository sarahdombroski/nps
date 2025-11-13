function menuToggle(ev) {
    const target = ev.currentTarget;
    document.querySelector('.global-nav').classList.toggle('show');
    
    if (target.tagName != 'BUTTON') {
        target = target.closest('button');
    }

    if (document.querySelector('.global-nav').classList.contains('show')) {
        target.setAttribute('aria-expanded', true);
    } else {
        target.setAttribute('aria-expanded', false);
    }        
}

function submenuToggle(ev) {
    const li = ev.currentTarget.closest('li');
    const submenu = li.querySelector('.global-nav__submenu');
    if (!submenu) return;
    
    submenu.classList.toggle('show');

    ev.currentTarget.querySelector(".icon").classList.toggle('rotate');
}

export default function enableNavigation() {
    const menuButton = document.querySelector('#global-nav-toggle'); 
    const subToggles = document.querySelectorAll('.global-nav__split-button__toggle');

    menuButton.addEventListener('click', menuToggle);
    subToggles.forEach((toggle) => {
        toggle.addEventListener('click', submenuToggle)
    })
}