import "../css/style.css";
import "../css/conditions.css";
import { getParkData, getAlertInfo, getVistorCentersData } from "./parkService.mjs";
import { alertLayout, visitorCenterLayout, activitiesLayout } from "./templates.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";

function setAlerts(alerts) {
    const alertSection = document.querySelector('.alerts > ul');
    const allLayout = alerts.map(alertLayout).join('');
    alertSection.innerHTML = allLayout;
}

function setVisitorCenters(centers) {
    const centersSelection = document.querySelector('.visitor > details > ul');
    const allLayout = centers.map(visitorCenterLayout).join('');
    centersSelection.innerHTML = allLayout;
}

function setActivities(activities) {
    const activitiesSelection = document.querySelector('.activities > details > ul');
    const allLayout = activities.map(activitiesLayout).join('');
    activitiesSelection.innerHTML = allLayout;
}

async function init() {
    const parkData = await getParkData();
    const alerts = await getAlertInfo();
    const centers = await getVistorCentersData();
    const activities = parkData.activities;

    setHeaderFooter(parkData);
    setAlerts(alerts);
    setVisitorCenters(centers);
    setActivities(activities);
}

init();