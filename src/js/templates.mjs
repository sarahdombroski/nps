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
    <h3><a href="visitor-center.html?id=${data.id}">${data.name}</a></h3>
    <p>${data.description}</p>
    <p>${data.directionsInfo}</p></li>
    `;
}

export function activitiesLayout(data) {
    return `<li class="activity">
    <p>${data.name}</p></li>
    `
}

export function listTemplate(data, contentTemplate) {
    const html = data.map(contentTemplate);
    return `<ul>${html.join("")}</ul>`;
}

export function vcImageTemplate(data) {
    return `<li><img src="${data.url}" alt="${data.altText}" ><li>`;
}

export function vcAmenityTemplate(data) {
    return `<li>${data}</li>`;
}

export function iconTemplate(iconId) {
    return `<svg class="icon" role="presentation" focusable="false">
        <use
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xlink:href="/images/sprite.symbol.svg#${iconId}"
        ></use>
        </svg>`;
}

export function vcTitleTemplate(text) {
    return `${iconTemplate("ranger-station")} ${text}`;
}

export function vcInfoTemplate(data) {
    const image = data.images[0];
    return `<figure>
                <img src="${image.url}" alt="${image.altText}" />
                <figcaption>
                    ${image.caption} <span>${image.credit}</span>
                </figcaption>
            </figure>
            <p>${data.description}</p>`
}

function vcAddressTemplate(data) {
    return `<section>
                <h3>${data.type} Address</h3>
                <address>
                    ${data.line1}<br />
                    ${data.city}, ${data.stateCode} ${data.postalCode}
                </address>
            </section>`;
}

export function vcAddressesListTemplate(data) {
    const physical = data.find((address) => address.type == 'Physical');
    const mailing = data.find((address) => address.type == 'Mailing');
    let address = vcAddressTemplate(physical);
    if (mailing) {
        address += vcAddressTemplate(mailing);
    }
    return address;
}

export function vcDirectionsTemplate(data) {
    return `<p>${data}</p>`;
}

export function vcContactsTemplate(data) {
    return `<section class="vc-contact__email">
                <h3>Email Address</h3>
                <a href="email:${data.emailAddresses[0].emailAddress}">Send this visitor center an email</a>
                </section>
                <section class="vc-contact__phone">
                <h3>Phone numbers</h3>
                <a href="tel:+1${data.phoneNumbers[0].phoneNumber}">${data.phoneNumbers[0].phoneNumber}</a>
            </section>`
}

export function vcDetailsTemplate(elementId, summaryText, iconId, content) {
    return `<details name="vc-details" id="${elementId}">
        <summary>
        ${iconTemplate(iconId)}
        ${summaryText}
        </summary>
        ${content}
        </details>`;
}