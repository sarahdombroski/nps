import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

function parkInfoTemplate(info) {
    return `<a href="/" class="banner-title">${info.name}</a>
    <p class="banner-subtitle">
        <span>${info.designation}</span>
        <span>${info.states}</span>
    </p>`;
}

const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

const image = document.querySelector('.banner > img');
image.src = parkData.images[0].url;

const parkInfo = document.querySelector(".banner-information");
parkInfo.innerHTML = parkInfoTemplate(parkData);

const title = document.querySelector("title");
title.innerHTML = parkData.fullName;