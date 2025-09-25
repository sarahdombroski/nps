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