import { parkInfoTemplate, footerLayout } from "./templates.mjs";

function setHeaderInfo(data) {
    // Disclaimer
    const disclaimer = document.querySelector(".disclaimer > a");
    disclaimer.href = data.url;
    disclaimer.innerHTML = data.fullName;
    // Image
    const image = document.querySelector('.banner > img');
    image.src = data.images[0].url;
    // Park Info
    const parkInfo = document.querySelector(".banner-information");
    parkInfo.innerHTML = parkInfoTemplate(data);
    // Document Title
    const title = document.querySelector("title");
    title.innerHTML = data.fullName;
}

function setFooterInfo(data) {
    const footer = document.querySelector('#park-footer');
    footer.innerHTML += footerLayout(data);
}

export default function setHeaderFooter(data) {
    setHeaderInfo(data);
    setFooterInfo(data);
}