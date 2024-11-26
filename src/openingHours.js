import {addElement} from "./domManipulation.js";

const addDaysToWorkingHours = (text, id) => {
    addElement("li", "day", id, "#openHourList", text);    
};
const addTimeToWorkingHours = (text, id) => {
    addElement("li", "hours", id, "#openHourList", text);
};

const showOpeningHours = () => {
addElement("h1", "headline", "tavernName", "#content", "The Roasted Pickle"); 

addElement("div", "informationTile", "openingHours", "#content", "");
addElement("h2", "tileTitle", "kitchenTitle", "#openingHours", "");
addElement("ul", "ul", "openHourList", "#kitchenTitle", "");

addDaysToWorkingHours("Monday to Thursday", "weekdays");
addTimeToWorkingHours("9 to 20", "weekdaysOpen");
addDaysToWorkingHours("Friday and Saturday", "weekend");
addTimeToWorkingHours("9 to 22", "weekendOpen");
addDaysToWorkingHours("Sunday", "sunday");
addTimeToWorkingHours("9 to 18, but only open for staying customers", "sundayOpen")
}

export { showOpeningHours };
