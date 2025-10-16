import spritePath from '../images/sprite.symbol.svg';

export function mediaCardTemplate(info) {
    return `<div class="info-card"><a href="${info.link}"><img src="${info.image}"></a>
    <a href="${info.link}"><h1>${info.name}</h1></a>
    <p>${info.description}</p></div>`;
}

export function parkInfoTemplate(info) {
    return `<a href="/" class="banner-title">${info.name}</a>
    <p class="banner-subtitle">
        <span>${info.designation}</span>
        <span>${info.states}</span>
    </p>`;
}

function getMailingAddress(addresses) {
    const mailing = addresses.find((address) => address.type === "Mailing");
    return mailing;
}

function getNumber(phoneNumbers) {
    const number = phoneNumbers.find((phoneNumber) => phoneNumber.type === "Voice");
    return number.phoneNumber;
}

export function footerLayout(data) {
    const mailingAddress = getMailingAddress(data.addresses);
    const phoneNumber = getNumber(data.contacts.phoneNumbers);

    return `<section class="contact">
    <h3>Contact Info</h3>
    <h4>Mailing Address:</h4>
    <div><p>${mailingAddress.line1}<p>
    <p>${mailingAddress.city}, ${mailingAddress.stateCode} ${mailingAddress.postalCode}</p></div>
    <h4>Phone:</h4>
    <p>${phoneNumber}</p>
    </section>`;
}

export function alertLayout(data) {
    let alertType = '';
    switch (data.category) {
        case "Park Closure":
            alertType = "closure";
            break;
        default:
            alertType = data.category.toLowerCase();
    }

    return `<li class="alert">
    <svg class="icon" focusable="false" aria-hidden="true"><use xlink:href="${spritePath}#alert-${alertType}"></use></svg>
    <div>
    <h3 class="alert-${alertType}">${data.title}</h1>
    <p>${data.description}</p></div></li>
    `;
}

export function visitorCenterLayout(data) {
    return `<li class="visitor-center">
    <h3>${data.name}</h3>
    <p>${data.description}</p>
    <p>${data.directionsInfo}</p></li>
    `;
}

export function activitiesLayout(data) {
    return `<li class="activity">
    <p>${data.name}</p></li>
    `
}