import "../css/style.css";
import "../css/visitor-center.css";
import setHeaderFooter  from './setHeaderFooter.mjs';
import { getParkData, getParkVisitorCenterDetails } from './parkService.mjs';
import { listTemplate, vcImageTemplate, vcAmenityTemplate, vcAddressesListTemplate, vcContactsTemplate, vcDetailsTemplate, vcDirectionsTemplate, vcInfoTemplate, vcTitleTemplate } from "./templates.mjs";

function getParam(param) {
    const search = location.search;
    const parameters = new URLSearchParams(search);
    return parameters.get(param);
}

function setPage(data) {
    // Title and Info
    document.querySelector('.vc-name').innerHTML = vcTitleTemplate(data.name);
    document.querySelector('.vc-info').innerHTML = vcInfoTemplate(data);

    const details = document.querySelector('.vc-details-list');
    details.innerHTML = "";

    // Addresses
    const addressLayout = vcAddressesListTemplate(data.addresses);
    details.insertAdjacentHTML('beforeend', vcDetailsTemplate('vcAddresses', "Addresses", 'heading-icon_map-pin', addressLayout));

    // Directions
    details.insertAdjacentHTML('beforeend', vcDetailsTemplate('vcDirections', "Directions", 'directions', vcDirectionsTemplate(data.directionsInfo)));

    // Amenities
    const amenitiesTemplate = listTemplate(data.amenities, vcAmenityTemplate);
    details.insertAdjacentHTML('beforeend', vcDetailsTemplate('vcAmenities', "Amenities", 'heading-icon_info', amenitiesTemplate));

    // Contact
    const contactTemplate = vcContactsTemplate(data.contacts);
    details.insertAdjacentHTML('beforeend', vcDetailsTemplate('vcContacts', "Contacts", 'phone', contactTemplate));

    // Gallery
    const galleryHTML = listTemplate(data.images, vcImageTemplate);
    document.querySelector('.vc-gallery').insertAdjacentHTML("beforeend", galleryHTML);
}

async function init() {
    const parkData = await getParkData();
    const id = getParam("id");
    const center = await getParkVisitorCenterDetails(id);
    
    setHeaderFooter(parkData);
    setPage(center);
}

init();