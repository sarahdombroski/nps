import { getParkData, parkInfoLinks } from "./parkService.mjs";
import { mediaCardTemplate } from "./templates.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";

const parkData = getParkData();

function setIntroInfo(data) {
    const intro = document.querySelector('.intro');
    intro.innerHTML = `<h1>${data.fullName}</h1><p>${data.description}</p>`;
}

function setInfo(info) {
    const infoSection = document.querySelector('.info');
    const allLayout = info.map(mediaCardTemplate).join('');
    infoSection.innerHTML = allLayout;
}

setHeaderFooter(parkData);
setIntroInfo(parkData);
setInfo(parkInfoLinks);