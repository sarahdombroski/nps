import "../css/style.css";
import "../css/home.css";
import { getParkData, getInfoLinks } from "./parkService.mjs";
import { mediaCardTemplate } from "./templates.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";

function setIntroInfo(data) {
    const intro = document.querySelector('.intro');
    intro.innerHTML = `<h1>${data.fullName}</h1><p>${data.description}</p>`;
}

function setInfo(info) {
    const infoSection = document.querySelector('.info');
    const allLayout = info.map(mediaCardTemplate).join('');
    infoSection.innerHTML = allLayout;
}

export async function init() {
    const parkData = await getParkData();
    const parkInfoLinks = await getInfoLinks(parkData);

    setHeaderFooter(parkData);
    setIntroInfo(parkData);
    setInfo(parkInfoLinks);
}

function enableNavigation() {
    const menuButton = document.querySelector('#global-nav-toggle');
        
    menuButton.addEventListener("click", (ev) => {
        let target = ev.target;
        document.querySelector('.global-nav').classList.toggle('show');

        if (target.tagName != 'BUTTON') {
            target = target.closest('button');
        }
        
        if (document.querySelector('.global-nav').classList.contains('show')) {
            target.setAttribute('aria-expanded', true);
        } else {
            target.setAttribute('aria-expanded', false);
        }        
    });
}

init();
enableNavigation();